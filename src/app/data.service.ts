import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  baseUrl: string;
  restUrls: any;
  serverConfig: any;

  constructor(private http: HttpClient) {
    this.baseUrl = this.buildBaseUrl();
  }

  getRestUrls(): any {
    return this.restUrls;
  }

  buildBaseUrl(): string {
    let baseUrl;
    if (this.serverConfig) {
      if (this.serverConfig.sslEnabled) {
        baseUrl = 'https://';
      } else {
        baseUrl = 'http://';
      }
      if (this.serverConfig.domain) {
        baseUrl += this.serverConfig.domain;
        if (this.serverConfig.port) {
          baseUrl += ':' + this.serverConfig.port;
        }
        baseUrl += '/';
      }
      if (this.serverConfig.appContext) {
        baseUrl += this.serverConfig.appContext + '/';
      }
      if (this.serverConfig.restContext) {
        baseUrl += this.serverConfig.restContext + '/';
      }
    } else {
      baseUrl = 'https://api.powerbi.com/v1.0/';
    }
    return baseUrl;
  }

  post(data: any, url: string, urlParams?: string | string[], searchParams?: {}): Observable<any> {
    return this.http.post<any>(this.buildUrl(url, urlParams, searchParams), data);
  }

  buildUrl(url: string, urlParams?: string | string[], searchParams?: {}): string {
    if (urlParams) {
      for (let i = 0; i < urlParams.length; i++) {
        url += '/' + urlParams[i];
      }
    }
    if (searchParams) {
      url += '?';
      for (const key in searchParams) {
        if (searchParams[key]) {
          url += key + '=' + searchParams[key] + '&';
        }
      }
      if (url.lastIndexOf('&') === url.length - 1) {
        url = url.substr(0, url.length -  1);
      }
    }
    if (!url.startsWith('http')) {
      url = this.baseUrl + url;
    }
    return url;
  }

  get(url: string, urlParams?: string | string[], searchParams?: {}): Observable<any> {
    return this.http.get<any>(this.buildUrl(url, urlParams, searchParams));
  }

}
