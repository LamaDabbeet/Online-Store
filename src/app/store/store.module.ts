import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { CartItemCardComponent } from './cart/cart-item-card/cart-item-card.component';
import { CheckoutSummaryComponent } from './checkout/checkout-summary/checkout-summary.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { RecipeCardComponent } from './checkout/recipe-card/recipe-card.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { RecipesService } from '../services/recipes.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnakeToTitleCaseModule } from '../pipes/snake-to-title-case.module';

@NgModule({
  declarations: [
    StoreComponent,
    NavbarComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ProductCardComponent,
    CartItemCardComponent,
    RecipeCardComponent,
    CheckoutSummaryComponent,
    CheckoutComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // Material
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatIconModule,
    MatChipsModule,
    MatMenuModule,
    //Pipes
    SnakeToTitleCaseModule,
  ],
  providers: [CartService, ProductsService, RecipesService],
})
export class StoreModule {}
