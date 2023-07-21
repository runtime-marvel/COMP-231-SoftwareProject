namespace restaurant_backend.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string? Password { get; set; }
        public DateTime? CreatedDate { get; set; }
        // public byte[] PasswordHash { get; set; }
      //  public byte[] PasswordSalt { get; set; }

    }
}
