namespace restaurant_backend.Models
{
    public class UserDTO
    {
        //Class Description:
        //Data transfer object used by AuthController for authenticating user name and password
      
        public string Username { get; set; } = string.Empty;
        public string Password { get; set;} = string.Empty;

    }
}
