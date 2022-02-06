import { CartItem } from './cart-item';

export interface Cart {
  id: any;
  items: CartItem[];
  subTotal: number;
}
