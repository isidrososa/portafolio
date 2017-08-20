import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { InfoService } from 'app/services/info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(public infoService: InfoService,
    public router: Router) { }

  searchProduct(param: string) {
    this.router.navigate(['/search', param]);
  }
}
