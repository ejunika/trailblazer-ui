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
      baseUrl = 'http://localhost:8080/com.trailblazer.api/v1/api/';
    }
    return baseUrl;
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
        if (searchParams[key] != undefined) {
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

  post(data: any, url: string, urlParams?: string | string[], searchParams?: {}): Observable<any> {
    return this.http.post<any>(this.buildUrl(url, urlParams, searchParams), data);
  }

  delete(url: string, urlParams?: string | string[], searchParams?: {}): Observable<any> {
    return this.http.delete<any>(this.buildUrl(url, urlParams, searchParams));
  }

  put(data: any, url: string, urlParams?: string | string[], searchParams?: {}): Observable<any> {
    return this.http.put<any>(this.buildUrl(url, urlParams, searchParams), data);
  }

}