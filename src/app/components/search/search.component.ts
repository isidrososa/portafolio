import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from 'app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  param: string = undefined;
  loadingSearch: boolean = false;

  constructor(public route: ActivatedRoute,
    public _ps: ProductsService) {
    route.params.subscribe(params => {
      this.param = params['param'];
      this._ps.searchProducts(this.param);
      this.loadingSearch = true;
    });
  }
}
