//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.IdentityModel.Tokens;
//using restaurant_backend.Models;
//using System.IdentityModel.Tokens.Jwt;
//using System.Security.Claims;
//using System.Security.Cryptography;

//namespace restaurant_backend.Controllers
//{
//    //Source: https://www.youtube.com/watch?v=v7q3pEK1EA0
//    [Route("api/[controller]")]
//    [ApiController]
//    public class AuthController : ControllerBase
//    {
//        public static User user = new User();
//        private readonly IConfiguration _config;

//        //TODO: 1. Implement list of users populated by database query of all users
//        //      2. Implement Login() method to perform search of User list to confirm user exists

//        public AuthController(IConfiguration config)
//        {
//            _config = config;
//        }

//        [HttpPost("register")]
//        public async Task<ActionResult<User>> Register(UserDTO request)
//        {
//            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);
//            user.UserName = request.UserName;
//            user.PasswordHash = passwordHash;
//            user.PasswordSalt = passwordSalt;
//            return Ok(user);

//        }

//        [HttpPost("login")]
//        public async Task<ActionResult<string>> Login(UserDTO request)
//        {
//            //TODO: Will need to implement getting all users and confirming request user exists
//            if (user.UserName == request.UserName)
//            {
//                return BadRequest("User not found.");
//            }

//            if (!VerifyPasswordHash(request.Password, user.PasswordHash, user.PasswordSalt))
//            {
//                return BadRequest("Wrong Password");
//            }

//            string token = CreateToken(user);
//            return Ok(token);
//        }

//        private string CreateToken(User user)
//        {
//            List<Claim> claims = new List<Claim>
//            {
//                new Claim(ClaimTypes.Name, user.UserName)
//            };

//            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
//                _config.GetSection("AppSettings:Token").Value));

//            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

//            var token = new JwtSecurityToken(
//                claims: claims,
//                expires: DateTime.Now.AddDays(1),
//                signingCredentials:cred);

//            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
//            return jwt;
//        }


//        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
//        {
//            using (var hmac = new HMACSHA512())
//            {
//                passwordSalt = hmac.Key;
//                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));

//            }
//        }

//        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
//        {
//            using (var hmac = new HMACSHA512(passwordSalt))
//            {
//                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
//                return computedHash.SequenceEqual(passwordHash);
//            }
//        }
//    }
//}
