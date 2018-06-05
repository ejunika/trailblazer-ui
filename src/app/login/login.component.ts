import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../user';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  confirmPassword: string;

  constructor(private router: Router, private dataService: DataService, private cookieService: CookieService) { }

  ngOnInit() {
    this.user = {username: '', emailId: '', password: ''};
    this.dataService.get('users', '', {
      offset: 1,
      limit: 100
    }).subscribe((res) => {
      debugger;
    });
  }

  doLogin(): void {
    console.log('[info]: Do login called');
  }

  signUp(): void {
    console.log('[info]: Signup called');
  }

  matchPassword(e): void {
    
  }

}
