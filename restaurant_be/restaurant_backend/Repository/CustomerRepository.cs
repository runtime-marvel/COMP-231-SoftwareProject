//using Microsoft.EntityFrameworkCore;
//using restaurant_backend.Interfaces;
//using restaurant_backend.Models;

//namespace restaurant_backend.Repository
//{
//    public class CustomerRepository:ICustomers
//    {

//        readonly DatabaseContext _dbContext = new();

//        public CustomerRepository(DatabaseContext dbContext)
//        {
//            _dbContext = dbContext;
//        }

//        public List<Customer> GetCustomerDetails()
//        {
//            try
//            {
//                return _dbContext.Customers.ToList();
//            }
//            catch
//            {
//                throw;
//            }
//        }

//        public Customer GetCustomerDetails(int id)
//        {
//            try
//            {
//                Customer? customer = _dbContext.Customers.Find(id);
//                if (customer != null)
//                    return customer;
//                else
//                    throw new ArgumentNullException();
//            }
//            catch
//            {
//                throw;
//            }
//        }

//        public void AddCustomer(Customer customer)
//        {
//            try
//            {
//                _dbContext.Customers.Add(customer);
//                _dbContext.SaveChanges();
//            }
//            catch
//            {
//                throw;
//            }
//        }

//        public void UpdateCustomer(Customer customer)
//        {
//            try
//            {
//                _dbContext.Entry(customer).State = EntityState.Modified;
//                _dbContext.SaveChanges();
//            }
//            catch
//            {
//                throw;
//            }
//        }

//        public Customer DeleteCustomer(int id)
//        {
//            try
//            {
//                Customer? customer = _dbContext.Customers.Find(id);

//                if (customer != null)
//                {
//                    _dbContext.Customers.Remove(customer);
//                    _dbContext.SaveChanges();
//                    return customer;
//                }
//                else
//                    throw new ArgumentNullException();
//            }
//            catch
//            {
//                throw;
//            }
//        }

//        public bool CheckCustomer(int id)
//        {
//            return _dbContext.Customers.Any(e => e.CustomerId== id);
//        }
//    }
//}

