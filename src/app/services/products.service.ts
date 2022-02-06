import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getGroceryProducts(productName: string) {
    let params = new HttpParams();
    params = params.append('query', productName);
    params = params.append('apiKey', environment.spoonacular.apiKey);
    return this.httpClient.get(
      'https://api.spoonacular.com/food/products/search',
      {
        params,
      }
    );
  }
  getProductDetails(productId: string) {
    let params = new HttpParams();
    params = params.append('apiKey', environment.spoonacular.apiKey);
    return this.httpClient.get(
      `https://api.spoonacular.com/food/products/${productId}`,
      {
        params,
      }
    );
  }
}
