import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService {
  products: any[] = [];
  loadingProducts: boolean = false;

  constructor(public http: Http) {
    this.loadProducts();
  }

  loadProducts(): void {
    if (this.products.length == 0) {
      let url: string = 'https://notificaciones-12221.firebaseio.com/products_idx.json';
      this.http.get(url)
        .subscribe(data => {
          this.products = data.json();
          console.log(this.products);
          this.loadingProducts = true;
        });
    } else {
      this.loadingProducts = true;
    }
  }
}