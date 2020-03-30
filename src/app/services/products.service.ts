import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loaded = false;
  products: Product[] = [];
  filteredProducts: Product[]

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    return new Promise((resolve, reject) => {
      this.http.get('https://portfolioangularapp.firebaseio.com/products_idx.json')
        .subscribe((res: Product[]) => {
          this.loaded = true;
          this.products = res;
          resolve();
        })
    })
  }

  getProduct(id: string) {
    return this.http.get(`https://portfolioangularapp.firebaseio.com/products/${id}.json`)
  }

  searchProduct(term: string) {
    if (this.products.length === 0) {
      // cargar productos
      this.loadProducts().then(() => {
        // ejecutar después de tener los productos
        this.filterProducts(term)
      })
    } else {
      // aplicar filtro
      this.filterProducts(term);
    }
  }

  filterProducts(term: string) {
    let lowerTerm = term.toLocaleLowerCase()
    this.filteredProducts = this.products.filter(product => {
      return product.title.toLowerCase().includes(lowerTerm) || product.category.toLowerCase().includes(lowerTerm)
    })
  }
}
