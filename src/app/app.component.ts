import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from './authentication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recruitment-tracker-app';
  constructor(public authenticationService: AuthenticationServiceService, private router: Router) { }

  login() {
    this.authenticationService.login();
  }
  logout() {
    this.authenticationService.logout() .subscribe(() => {
      this.authenticationService.removeToken();
      this.router.navigate(['/']);
    });
  }
}
