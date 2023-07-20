using Microsoft.EntityFrameworkCore;

namespace restaurant_backend.Models
{
    public class UserContext : DbContext
    {
        //Source: https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-6.0&tabs=visual-studio
        //Class description:
        //
        public UserContext(DbContextOptions<UserContext> options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; } = null;
    }
}



