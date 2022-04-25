import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAuthorized: boolean = false;
  constructor(private authenticationService: AuthenticationServiceService, private router: Router) {
  }
  async ngOnInit(){
    this.authenticationService.validation().subscribe(data=>{
      this.isAuthorized=(data==="true");
    });
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authenticationService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/callback']);
    return false;
  }

}
