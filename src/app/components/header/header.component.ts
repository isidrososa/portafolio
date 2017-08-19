import { Component } from '@angular/core';

import { InfoService } from 'app/services/info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(public infoService: InfoService) { }
}
