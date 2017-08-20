import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from 'app/services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent {
  product: any = {};
  loadingProduct: boolean = false;

  constructor(public route: ActivatedRoute,
    _ps: ProductsService) {
    route.params.subscribe(params => {
      console.log(params);
      console.log(params['id']);
      _ps.loadProduct(params['id'])
        .subscribe(res => {
          this.product = res.json();
          console.log(this.product);
          this.loadingProduct = true;
        })
    });
  }
}
