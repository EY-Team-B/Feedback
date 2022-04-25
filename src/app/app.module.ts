import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthHeaderInterceptor } from './auth-header.interceptor';
import { CallbackComponent } from './callback/callback.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ManagerComponent } from './manager/manager.component';
import { CommonModule } from '@angular/common';
import { UserServiceService } from './user-service.service';
import { UserListComponent } from './user-list/user-list.component';
import { ReportsComponent } from './reports/reports.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    CallbackComponent,
    UnauthorizedComponent,    
    PageNotFoundComponent,
    ManagerComponent,
    CreateUserComponent,
    UserListComponent,
    UpdateUserComponent,
    ReportsComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true
    },
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
