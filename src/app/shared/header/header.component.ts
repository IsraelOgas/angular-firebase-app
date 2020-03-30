import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/services/page-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _service: PageInfoService, private router: Router) { 

  }

  ngOnInit(): void {
  }

  searchProduct(term: string) {
    if(term.length < 1) {
      return;
    }
    this.router.navigate(['/search', term]);
  }

}
