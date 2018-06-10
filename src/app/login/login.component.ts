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
    this.user = {username: '', emailId: 'akhtar.azaz@google.com', password: 'superadmin'};
  }

  doLogin(): void {
    this.dataService.post({
      emailId: this.user.emailId,
      password: this.user.password
    }, 'auth', ['login']).subscribe((res) => {
      if (res.status) {
        this.cookieService.set('accessToken', res.data[0]);
        this.router.navigate(['home']);
      }
      console.log(res.infoMessage);
    });
  }

  signUp(): void {
    console.log('[info]: Signup called');
  }

  matchPassword(e): void {
    
  }

}
