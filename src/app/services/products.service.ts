import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService {
  products: any[] = [];
  loadingProducts: boolean = false;
  filterProducts: any[] = [];

  constructor(public http: Http) {
    this.loadProducts();
  }

  loadProducts() {
    const promise = new Promise((resolve, reject) => {
      if (this.products.length == 0) {
        let url: string = 'https://notificaciones-12221.firebaseio.com/products_idx.json';
        this.http.get(url)
          .subscribe(data => {
            this.products = data.json();
            this.loadingProducts = true;
            resolve();
          });
      } else {
        this.loadingProducts = true;
        resolve();
      }
    });

    return promise;
  }

  loadProduct(idx: string): any {
    let url: string = `https://notificaciones-12221.firebaseio.com/products/${idx}.json`;
    return this.http.get(url);
  }

  searchProducts(param: string): void {
    if (this.products.length == 0) {
      this.loadProducts().then(() => {
        this.filter(param);
      })
    } else {
      this.filter(param);
    }
  }

  filter(param: string) {
    param = param.toLowerCase();
    this.filterProducts = [];
    this.products.forEach(prod => {
      if (prod.categoria.indexOf(param) > -1 || prod.titulo.toLowerCase().indexOf(param) > -1) {
        this.filterProducts.push(prod);
      }
    });
  }
}