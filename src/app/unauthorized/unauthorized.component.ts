import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../authentication-service.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {

  constructor(private authenticationService: AuthenticationServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  redirect() {
    this.authenticationService.logout().subscribe(() => {
      this.authenticationService.removeToken();
      this.router.navigate(['/']);
    });
  }
}
