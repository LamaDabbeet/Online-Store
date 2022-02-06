import { Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Subscription, switchMap } from 'rxjs';
import { Recipe } from '../models/recipe';
import { CartService } from '../services/cart.service';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  recipes?: Recipe[];
  private subscription?: Subscription;

  constructor(
    private recipesService: RecipesService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService
      .getItems()
      .pipe(
        switchMap((cartItems) => {
          const ingredients = [
            ...new Set(cartItems.map((item) => item.original)),
          ];
          if (!ingredients) return EMPTY;
          else return this.recipesService.getRecommendedRecipes(ingredients);
        })
      )
      .subscribe({
        next: (recipesData: any) => {
          this.recipes = recipesData;
        },
      });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
