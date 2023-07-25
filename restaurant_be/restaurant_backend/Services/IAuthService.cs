using restaurant_backend.Models;

namespace restaurant_backend.Services
{
    public interface IAuthService
    {
        Task<User> RegisterUser(UserDTO request);
        User RegisterUserInit(UserDTO request);
        Task<AuthResponseDTO> Login(UserDTO request);
        Task<AuthResponseDTO> RefreshToken();

    }
}
