import { Component, OnInit } from '@angular/core';
import {Order, OrderItem} from './OrderModel';
import { Router } from '@angular/router';
import {OrderServiceService } from '../services/order-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderService :  OrderServiceService , private router: Router) { }

  orders: Order[] = [];

  ngOnInit(): void {
    // Simulated data...
    this.orderService.getOrders().subscribe((orders: Order[]) => {
      this.orders = orders;
    },
    (error) => {
      console.error('Error fetching orders:', error);
    });
  }

  toggleOrderItems(order: Order): void {
    order.showItems = !order.showItems; // Toggle order item visibility
  }

  createOrder(): void {
    // Simulated data...

    this.router.navigate(['order/create']);
    // const newItem: OrderItem = { itemName: 'Product X', quantity: 2, price: 25.00 };
    // const newOrder: Order = {
    //   id: this.orders.length + 1,
    //   customerName: 'New Customer',
    //   totalAmount: newItem.quantity * newItem.price,
    //   items: [newItem],
    //   showItems: false // Initially hide items
    // };
    // this.orders.push(newOrder);
  }

  updateOrder(order : Order): void {
    this.router.navigate(['order/update/'+order.id]);
    // Simulated data...
    // const newItem: OrderItem = { itemName: 'Product X', quantity: 2, price: 25.00 };
    // const newOrder: Order = {
    //   id: this.orders.length + 1,
    //   customerName: 'New Customer',
    //   totalAmount: newItem.quantity * newItem.price,
    //   items: [newItem],
    //   showItems: false // Initially hide items
    // };
    // this.orders.push(newOrder);
  }


}
