import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass'],
})
export class ProductCardComponent {
  @Input() product?: Product;
  @Input() cart?: Cart;
  @Input() originalName?: string;

  constructor(public cartService: CartService) {}
  added: boolean = false;
  addToCart() {
    this.added = true;
    let cartItem: Partial<CartItem>;
    cartItem = {
      title: this.product?.title,
      price: this.product?.price,
      productId: this.product?.id,
      image: this.product?.image,
      quantity: 1,
      original: this.originalName,
    };
    this.cartService.addItemToCart(cartItem);
  }
  removeProduct() {
    this.added = false;
    if (this.product) this.cartService.removeItemFromCart(this.product?.id);
  }
}
