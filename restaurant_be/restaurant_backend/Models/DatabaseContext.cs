using Microsoft.EntityFrameworkCore;

namespace restaurant_backend.Models
{
    public partial class DatabaseContext:DbContext
    {
        public DatabaseContext()
        {
        }

        public  DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Customer>? Customers { get; set; }
        public virtual DbSet<User>? Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasNoKey();
                entity.ToTable("UserInfo");
                entity.Property(e => e.UserId).HasColumnName("UserId");
                entity.Property(e => e.UserName).HasMaxLength(30).IsUnicode(false);
                entity.Property(e => e.Password).HasMaxLength(20).IsUnicode(false);
                entity.Property(e => e.CreatedDate).IsUnicode(false);
            });
            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("Customer");
                entity.Property(e => e.CustomerId).HasColumnName("CustomerId");
                entity.Property(e => e.Name).HasMaxLength(100).IsUnicode(false);
                entity.Property(e => e.Email).HasMaxLength(50).IsUnicode(false);
                entity.Property(e => e.Address).HasMaxLength(50).IsUnicode(false);
            });
            OnModelCreatingPartial(modelBuilder);


                // base.OnModelCreating(modelBuilder);
            }
        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
