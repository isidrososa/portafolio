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
  productId: string = undefined;

  constructor(public route: ActivatedRoute,
    public _ps: ProductsService) {
    route.params.subscribe(params => {
      this.productId = params['id'];
      _ps.loadProduct(this.productId)
        .subscribe(res => {
          this.product = res.json();
          // console.log(this.product);
          this.loadingProduct = true;
        })
    });
  }
}
