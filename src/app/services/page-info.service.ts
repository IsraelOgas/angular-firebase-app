import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  pageInfo: InfoPage = {};
  teamwork: any[] = [];
  loaded = false;

  constructor(private http: HttpClient) {
    this.loadPageInfo();
    this.loadTeamwork();
  }

  private loadPageInfo() {
    this.http.get('assets/data/data.json')
      .subscribe((res: InfoPage) => {
        this.pageInfo = res;
      })
  }

  private loadTeamwork() {
    this.http.get('https://portfolioangularapp.firebaseio.com/teamwork.json')
    .subscribe((res: any[]) => {
      this.loaded = true;
      this.teamwork = res;
    })
  }
}
