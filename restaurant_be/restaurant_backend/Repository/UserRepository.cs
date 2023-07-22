using Humanizer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.EntityFrameworkCore;
using restaurant_backend.Models;
using restaurant_backend.Services;

namespace restaurant_backend.Repository
{
    public class UserRepository:IUserRepository
    {
        readonly IAuthService _authService;
        public UserRepository(IAuthService authService)
        {

          
            _authService = authService;

            UserDTO dto = new UserDTO();
            dto.Username = "Kyle";
            dto.Password = "google";
            User user = _authService.RegisterUserInit(dto);

            using (var context = new DatabaseContext())
            {
                //var users = new List<User>
                //{

                // new User
                //    {

                //        Username = "test",
                //        Id = 1,

                //        Role="Customer"

                //    } };
                //context.Users.AddRange(users);
                context.Users.Add(user);
                context.SaveChanges();
            }
            _authService = authService;
        }


        public List<User> GetUsers()
        {
            using (var context = new DatabaseContext())
            {
                var list = context.Users.
                    ToList();
                return list;
            }
        }
       
    }
}
