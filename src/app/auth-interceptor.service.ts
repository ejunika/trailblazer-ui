import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthInterceptorService {

  accessToken: string;

  constructor() {
    this.accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjgyMzM3MDIsImlhdCI6MTUyODIzMDEwMiwiaXNzIjoid3d3LmV6dGVjaC5jb20iLCJ1c2VySWQiOiIxMTEiLCJlbWFpbElkIjoidGVzdC51c2VyQHRlc3QuY29tIn0.39C2ACHh8HkCIexj0Zwf_zf3u2BJT8Id3olUl0jmDH8';
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const updatedHeaders: any = {'Content-Type': 'application/json; charset=UTF-8'};
    updatedHeaders.Authorization = 'Bearer ' + this.accessToken;
    const clonedRequest = request.clone({
      setHeaders: updatedHeaders
    });
    return next.handle(clonedRequest).catch(error => {
      if (error instanceof HttpErrorResponse) {
          switch ((<HttpErrorResponse>error).status) {
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