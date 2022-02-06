import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
})
export class ProductsComponent {
  private subscription?: Subscription;

  searchProductForm = this.fb.group({
    productName: ['', Validators.required],
  });

  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder
  ) {}

  products: Product[] = [];

  getProducts() {
    this.subscription = this.productsService
      .getGroceryProducts(this.searchProductForm.value.productName)
      .subscribe({
        next: (data: any) => {
          this.products = data.products;
        },
      });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
