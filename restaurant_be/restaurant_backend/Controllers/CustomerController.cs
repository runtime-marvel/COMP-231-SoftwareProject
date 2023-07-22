//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using restaurant_backend.Interfaces;
//using restaurant_backend.Models;

//namespace restaurant_backend.Controllers
//{
//    [Authorize]
//    [Route("api/[controller]")]
//    [ApiController]
//    public class CustomerController : ControllerBase
//    {
        
      
        
//            private readonly ICustomers _ICustomer;

//            public CustomerController(ICustomers ICustomer)
//            {
//                _ICustomer = ICustomer;
//            }

//            // GET: api/customer>
//            [HttpGet]
//            public async Task<ActionResult<IEnumerable<Customer>>> Get()
//            {
//                return await Task.FromResult(_ICustomer.GetCustomerDetails());
//            }

//            // GET api/customer/5
//            [HttpGet("{id}")]
//            public async Task<ActionResult<Customer>> Get(int id)
//            {
//                var customers = await Task.FromResult(_ICustomer.GetCustomerDetails(id));
//                if (customers == null)
//                {
//                    return NotFound();
//                }
//                return customers;
//            }

//            // POST api/customer
//            [HttpPost]
//            public async Task<ActionResult<Customer>> Post(Customer customer)
//            {
//                _ICustomer.AddCustomer(customer);
//                return await Task.FromResult(customer);
//            }

//            // PUT api/customer/5
//            [HttpPut("{id}")]
//            public async Task<ActionResult<Customer>> Put(int id, Customer customer)
//            {
//                if (id != customer.CustomerId)
//                {
//                    return BadRequest();
//                }
//                try
//                {
//                    _ICustomer.UpdateCustomer(customer);
//                }
//                catch (DbUpdateConcurrencyException)
//                {
//                    if (!CustomerExists(id))
//                    {
//                        return NotFound();
//                    }
//                    else
//                    {
//                        throw;
//                    }
//                }
//                return await Task.FromResult(customer);
//            }

//            // DELETE api/customer/5
//            [HttpDelete("{id}")]
//            public async Task<ActionResult<Customer>> Delete(int id)
//            {
//                var customer = _ICustomer.DeleteCustomer(id);
//                return await Task.FromResult(customer);
//            }

//            private bool CustomerExists(int id)
//            {
//                return _ICustomer.CheckCustomer(id);
//            }
//        }
//    }

