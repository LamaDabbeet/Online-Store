import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private httpClient: HttpClient) {}

  getRecommendedRecipes(ingredients: string[]) {
    const queryParmas = ingredients
      .map((item) => {
        return `${item},+`;
      })
      .toString();

    let params = new HttpParams();
    params = params.append('ingredients', queryParmas);
    params = params.append('apiKey', environment.spoonacular.apiKey);
    return this.httpClient.get(
      'https://api.spoonacular.com/recipes/findByIngredients',
      {
        params,
      }
    );
  }
}
