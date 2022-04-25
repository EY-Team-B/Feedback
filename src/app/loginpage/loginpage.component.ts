import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.http.get(environment.baseUrl + '/v1/home').subscribe(data=>console.log(data));
  }

  onClick(){
    this.router.navigate(['/view']);
  }
}
