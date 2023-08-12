import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {Order, OrderItem} from '../order/OrderModel';
import { OrderServiceService } from '../services/order-service.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  orderId: number;
  isUpdating: boolean = false;
  orderForm: FormGroup;
 existingOrder: Order;

 allItems = [{'itemName' :'Burger','quantity':1, 'price':20 },
 {'itemName' :'Pizza','quantity':1, 'price':20 },
 {'itemName' :'Noodle','quantity':1, 'price':20 },
 {'itemName' :'Cake','quantity':1, 'price':20 }
]; // Replace with your item options




  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private orderServce :  OrderServiceService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.orderId = +params['id'];
        this.isUpdating = true;

        // Fetch order details and populate form for updating
      }
    });

    this.orderForm = this.fb.group({
      customerName: ['', Validators.required],
      totalAmount: [0, Validators.min(0)],
      showItems: [false],
      selectedItems: [[]] ,
      items: this.fb.array([]) // Initialize an empty array for items
    });

    // If updating, you can populate the form with existing order data
    if (this.isUpdating) {
      // Fetch order data and populate the form
       this.orderServce.getOrderById(this.orderId).
      subscribe((data : Order) => {
        console.log(data);
        this.existingOrder =data}

      ,
    (error) => {
      console.error('Error fetching orders:', error);
    }
      ); // Fetch existing order details

      this.orderForm.patchValue({
        customerName: this.existingOrder.customerName,
        totalAmount: this.existingOrder.totalAmount,
        selectedItems: this.existingOrder.items,
        showItems: true // Assuming you always want to show items during update
      });

      // Populate order items
      this.populateItems(this.existingOrder.items);
    }
  }

  // Helper function to populate order items in the form
  private populateItems(items: OrderItem[]): void {
    const itemsArray = this.orderForm.get('items') as FormArray;
    items.forEach(item => {
      itemsArray.push(this.fb.group({
        itemName: [item.itemName, Validators.required],
        quantity: [item.quantity, Validators.min(1)],
        price: [item.price, Validators.min(0)]
      }));
    });
  }

  // Getter for easier access to the showItems control
  get showItemsControl() {
    return this.orderForm.get('showItems');
  }

  // Getter for easier access to the itemsControls FormArray
  get itemsControls() {
    return this.orderForm.get('items') as FormArray;
  }

  submitForm() {
    if (this.orderForm.valid) {
      const formData = this.orderForm.value;
      formData.items = formData.selectedItems;
      console.log(formData);
      if(this.isUpdating){
        formData.id=this.orderId;
        this.orderServce.updateOrder(formData);
      }else{
        this.orderServce.createOrder(formData);
      }
    }
   this.router.navigate(['orders']);
  }


}
