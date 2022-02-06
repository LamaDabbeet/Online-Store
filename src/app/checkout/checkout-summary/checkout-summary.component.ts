import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrls: ['./checkout-summary.component.sass'],
})
export class CheckoutSummaryComponent implements OnInit {
  cartItems$: Observable<CartItem[]> | undefined;
  subTotal$: Observable<number> | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems$ = this.cartService.getItems();
    this.subTotal$ = this.cartService.getSubTotal();
  }
}
