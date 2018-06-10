import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { NavComponent } from './nav/nav.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { SidebarSubNavComponent } from './sidebar-sub-nav/sidebar-sub-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    MenuListComponent,
    ToolbarComponent,
    SidebarNavComponent,
    SidebarSubNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CookieService,
    DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
