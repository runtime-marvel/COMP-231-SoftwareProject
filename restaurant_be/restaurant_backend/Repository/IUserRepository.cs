using restaurant_backend.Models;

namespace restaurant_backend.Repository
{
    public interface IUserRepository
    {
        public List<User> GetUsers();
    }
}
