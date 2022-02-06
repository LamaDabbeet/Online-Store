import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, pluck } from 'rxjs';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart$ = new BehaviorSubject<Cart>({
    id: null,
    items: [],
    subTotal: 0,
  });

  constructor() {}

  addItemToCart(_cartItem: any) {
    const cart = { ...this.cart$.value };
    cart.items.push(_cartItem);
    this.cart$.next(cart);
  }

  removeItemFromCart(_itemId: number) {
    const cart = { ...this.cart$.value };
    cart.items = cart.items.filter((item) => _itemId !== item.productId);
    this.cart$.next(cart);
  }

  getCount(): Observable<number> {
    return this.cart$.pipe(
      map((shoppingCart) => {
        if (!shoppingCart) return 0;
        else {
          const count = shoppingCart.items
            .map((item) => item.quantity)
            .reduce((p, c) => p + c, 0);
          return count;
        }
      })
    );
  }
  getSubTotal(): Observable<number> {
    return this.cart$.pipe(
      map((shoppingCart) => {
        if (!shoppingCart) return 0;
        const subTotal = shoppingCart.items
          .map((item) => item?.price)
          .reduce((p, c) => p + c, 0);
        return subTotal;
      })
    );
  }
  getItems(): Observable<CartItem[]> {
    return this.cart$.pipe(pluck('items'));
  }
}
