using restaurant_backend.Models;

namespace restaurant_backend.Interfaces
{
    public interface ICustomers
    {
        public List<Customer> GetCustomerDetails();
        public Customer GetCustomerDetails(int id);
        public void AddCustomer(Customer customer);
        public void UpdateCustomer(Customer customer);
        public Customer DeleteCustomer(int id);
        public bool CheckCustomer(int id);

    }
}
