using Microsoft.EntityFrameworkCore;

namespace restaurant_backend.Models
{



    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options)
        {

        }
        //TODO: renamce of variable required:
        public DbSet<User> Users { get; set; } = null;
    }
}



