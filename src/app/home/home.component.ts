import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router, 
    private cookieService: CookieService, 
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.get('users', [], {
      offset: 0,
      limit: 100
    }).subscribe((res) => {
      console.log(res);
    });
  }

}
