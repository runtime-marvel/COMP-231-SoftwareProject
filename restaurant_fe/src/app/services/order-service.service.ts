import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../order/OrderModel';
@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  OrderItemsKey : string[] =['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  orders: Order[] = [
    {
      "id": 1,
      "customerName": "John Doe",
      "totalAmount": 120.00,
      "showItems" : false,
      "items": [
        {
          "itemName": "Product A",
          "quantity": 2,
          "price": 50.00
        },
        {
          "itemName": "Product B",
          "quantity": 3,
          "price": 10.00
        }
      ]
    },
    {
      "id": 2,
      "customerName": "Jane Smith",
      "showItems" : false,
      "totalAmount": 45.50,
      "items": [
        {
          "itemName": "Product C",
          "quantity": 1,
          "price": 20.00
        }
      ]
    }
    // Add more orders with items as needed
  ];

  constructor() { }
  getOrders(): Observable<Order[]> {
    // Simulated dummy JSON data

    // Create and return an observable with the dummy data
    return of(this.orders);
  }


  getOrderById(id: number): Observable<Order | undefined> {
    const order = this.orders.find(o => o.id === id);
    return of(order);
  }

  updateOrder(order: Order): Observable<Order | undefined> {
    this.orders.forEach(o=>{
      if(o.id == order.id){
        o.customerName = order.customerName;
        o.items = order.items;
        o.showItems = order.showItems;
        o.totalAmount = order.totalAmount;
      }
    })
    return of(order);
  }

  createOrder(order: Order): Observable<Order | undefined> {
    order.id = this.orders.length+1;
    this.orders.push(order)
    return of(order);

  }
}
