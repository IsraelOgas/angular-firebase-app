import { Component, OnInit } from '@angular/core';
import { PageInfoService } from '../../services/page-info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public _service: PageInfoService) { }

  ngOnInit(): void {
  }

}
