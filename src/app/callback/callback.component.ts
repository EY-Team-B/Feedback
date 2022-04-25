import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AuthenticationServiceService } from '../authentication-service.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationServiceService,
    private auth: AuthGuard) {
  }

  ngOnInit(): void {
      this.route.queryParams.subscribe(p => {
        this.authenticationService.fetchToken(p['code'], p['state']).subscribe(data => {
          this.authenticationService.updateToken(data.accessToken);
          this.authenticationService.validation().subscribe(data => {
            if(data=='true'){
              this.router.navigate(['/login']);
            } else{
              this.router.navigate(['/unauthorized']);
            }
          });
        });
      });
  }

}
