import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptorService {

  accessToken: string;

  constructor(private cookieService: CookieService) {
    // this.accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjgyNzM5ODgsImlhdCI6MTUyODI3MDM4OCwiaXNzIjoid3d3LmV6dGVjaC5jb20iLCJ1c2VySWQiOiIxMTEiLCJlbWFpbElkIjoidGVzdC51c2VyQHRlc3QuY29tIn0.rb0Vb85IT0aJKuvrcFdnPFm4VN_7myBTSrV0cv6vFJQ';
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let accessToken = this.cookieService.get('accessToken');
    const headers: any = {
      'Content-Type': 'application/json; charset=UTF-8', 
      Authorization: 'Bearer ' + accessToken
    };
    const clonedRequest = request.clone({
      setHeaders: headers
    });
    return next.handle(clonedRequest).catch(error => {
      if (error instanceof HttpErrorResponse) {
          switch ((<HttpErrorResponse> error).status) {
              case 401:
                return this.handle401(request, next);
              default:
                return next.handle(clonedRequest);
          }
      } else {
          return Observable.throw(error);
      }
    });
  }

  handle401(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request);
  }

}