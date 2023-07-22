﻿using Microsoft.IdentityModel.Tokens;
using restaurant_backend.Models;
using static restaurant_backend.Services.AuthService;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using Microsoft.EntityFrameworkCore;

namespace restaurant_backend.Services
{
  
        public class AuthService : IAuthService
        {
            private readonly DatabaseContext _context;
            private readonly IConfiguration _configuration;
            private readonly IHttpContextAccessor _httpContextAccessor;

            public AuthService(DatabaseContext context, IConfiguration configuration, IHttpContextAccessor httpContextAccessor)
            {
                _context = context;
                _configuration = configuration;
                _httpContextAccessor = httpContextAccessor;
            }

            public async Task<AuthResponseDTO> Login(UserDTO request)
            {
                var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == request.Username);
                if (user == null)
                {
                    return new AuthResponseDTO { Message = "User not found." };
                }

                if (!VerifyPasswordHash(request.Password, user.PasswordHash, user.PasswordSalt))
                {
                    return new AuthResponseDTO { Message = "Wrong Password." };
                }

                string token = CreateToken(user);
                var refreshToken = CreateRefreshToken();
                SetRefreshToken(refreshToken, user);

                return new AuthResponseDTO
                {
                    Success = true,
                    Token = token,
                    RefreshToken = refreshToken.Token,
                    TokenExpires = refreshToken.Expires
                };
            }

            public async Task<User> RegisterUser(UserDTO request)
            {
                CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

                var user = new User
                {
                    Username = request.Username,
                    PasswordHash = passwordHash,
                    PasswordSalt = passwordSalt
                };

                _context.Users.Add(user);
                await _context.SaveChangesAsync();

                return user;
            }

        public  User RegisterUserInit(UserDTO request)
        {
            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

            var user = new User
            {
                Username = request.Username,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt
            };

           // _context.Users.Add(user);
          //  await _context.SaveChangesAsync();

            return user;
        }

        public async Task<AuthResponseDTO> RefreshToken()
            {
                var refreshToken = _httpContextAccessor?.HttpContext?.Request.Cookies["refreshToken"];
                var user = await _context.Users.FirstOrDefaultAsync(u => u.RefreshToken == refreshToken);
                if (user == null)
                {
                    return new AuthResponseDTO { Message = "Invalid Refresh Token" };
                }
                else if (user.TokenExpires < DateTime.Now)
                {
                    return new AuthResponseDTO { Message = "Token expired." };
                }

                string token = CreateToken(user);
                var newRefreshToken = CreateRefreshToken();
                SetRefreshToken(newRefreshToken, user);

                return new AuthResponseDTO
                {
                    Success = true,
                    Token = token,
                    RefreshToken = newRefreshToken.Token,
                    TokenExpires = newRefreshToken.Expires
                };
            }

            private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
            {
                using (var hmac = new HMACSHA512(passwordSalt))
                {
                    var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                    return computedHash.SequenceEqual(passwordHash);
                }
            }

            public void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
            {
                using (var hmac = new HMACSHA512())
                {
                    passwordSalt = hmac.Key;
                    passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                }
            }

            private string CreateToken(User user)
            {
                List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Role, user.Role)
            };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                    _configuration.GetSection("AppSettings:Token").Value));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

                var token = new JwtSecurityToken(
                    claims: claims,
                    expires: DateTime.Now.AddDays(1),
                    signingCredentials: creds);

                var jwt = new JwtSecurityTokenHandler().WriteToken(token);

                return jwt;
            }

            private RefreshToken CreateRefreshToken()
            {
                var refreshToken = new RefreshToken
                {
                    Token = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64)),
                    Expires = DateTime.Now.AddDays(7),
                    Created = DateTime.Now
                };

                return refreshToken;
            }

            private async void SetRefreshToken(RefreshToken refreshToken, User user)
            {
                var cookieOptions = new CookieOptions
                {
                    HttpOnly = true,
                    Expires = refreshToken.Expires,
                };
                _httpContextAccessor?.HttpContext?.Response
                    .Cookies.Append("refreshToken", refreshToken.Token, cookieOptions);

                user.RefreshToken = refreshToken.Token;
                user.TokenCreated = refreshToken.Created;
                user.TokenExpires = refreshToken.Expires;

                await _context.SaveChangesAsync();
            }
        }
    }


