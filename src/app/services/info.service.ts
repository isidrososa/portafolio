import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InfoService {
  info: any = {};
  loading: boolean = false;

  constructor(public http: Http) {
    this.http.get('assets/data/info.page.json')
      .subscribe(data => {
        this.info = data.json();
        console.log(this.info);
        this.loading = true;
      });
  }

}