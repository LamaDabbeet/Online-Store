import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartService } from './services/cart.service';
import { ProductsService } from './services/products.service';
import { RecipesService } from './services/recipes.service';
import { AuthService } from './services/auth.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { SnakeToTitleCaseModule } from './pipes/snake-to-title-case.module';
import { CartItemCardComponent } from './cart/cart-item-card/cart-item-card.component';
import { RecipeCardComponent } from './checkout/recipe-card/recipe-card.component';
import { CheckoutSummaryComponent } from './checkout/checkout-summary/checkout-summary.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './guards/auth.guard';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    CartComponent,
    LoginComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ProductCardComponent,
    CartItemCardComponent,
    RecipeCardComponent,
    CheckoutSummaryComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SnakeToTitleCaseModule,
    // Firebase
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule,
    // Material
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatIconModule,
    MatChipsModule,
  ],
  providers: [
    AuthService,
    CartService,
    ProductsService,
    RecipesService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
