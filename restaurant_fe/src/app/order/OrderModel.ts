export interface Order {
  id: number;
  customerName: string;
  totalAmount: number;
  showItems: boolean;
  items: OrderItem[]; // Add order items array
}

export interface OrderItem {
  itemName: string;
  quantity: number;
  price: number;

}
