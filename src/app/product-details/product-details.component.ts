import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Subscription, switchMap } from 'rxjs';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private subscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}
  product?: Product;
  ngOnInit(): void {
    this.subscription = this.route.paramMap
      .pipe(
        switchMap((params) => {
          const productId = params.get('id');
          if (productId)
            return this.productsService.getProductDetails(productId);
          return EMPTY;
        })
      )
      .subscribe({
        next: (data: any) => {
          this.product = data;
        },
      });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
