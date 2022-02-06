import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item-card',
  templateUrl: './cart-item-card.component.html',
  styleUrls: ['./cart-item-card.component.sass'],
})
export class CartItemCardComponent {
  @Input() cartItem?: CartItem;

  constructor(private cartService: CartService) {}

  deleteCartItem(itemId: number) {
    this.cartService.removeItemFromCart(itemId);
  }
}
