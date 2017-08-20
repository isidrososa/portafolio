import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InfoService {
  info: any = {};
  loadingData: boolean = false;
  loadingTeam: boolean = false;
  team: any = [];

  constructor(public http: Http) {
    this.loadInfo();
    this.loadTeam();
  }

  loadInfo(): void {
    this.http.get('assets/data/info.page.json')
      .subscribe(data => {
        this.info = data.json();
        this.loadingData = true;
      });
  }

  loadTeam(): void {
    let url: string = "https://notificaciones-12221.firebaseio.com/team.json";
    this.http.get(url)
      .subscribe(data => {
        console.log(data.json());
        this.team = data.json();
        this.loadingTeam = true;
      });
  }
}