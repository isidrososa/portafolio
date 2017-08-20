import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent {
  constructor(public route: ActivatedRoute) {
    route.params.subscribe(params => {
      console.log(params);
      console.log(params['id']);
    });
  }
}
