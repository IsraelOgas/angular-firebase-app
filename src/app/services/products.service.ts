import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loaded = false;
  products: Product[] = [];
  constructor(private http: HttpClient) {
    this.loadProducts();
   }

  private loadProducts() {
    this.http.get('https://portfolioangularapp.firebaseio.com/productos_idx.json')
    .subscribe((res: Product[]) => {
      this.loaded = true;
      this.products = res;
      console.log(res);
    })
  }
}
