using Microsoft.EntityFrameworkCore;

namespace restaurant_backend.Models
{
    public class DatabaseContext : DbContext
    {

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase(databaseName: "UserDb");
        }
        //public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        //{

        //}

        public DbSet<User> Users => Set<User>();

    }
}