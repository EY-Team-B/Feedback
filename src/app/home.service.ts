import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private userProfileUrl = environment.baseUrl + '';
  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<any> {
    return this.http.get(this.userProfileUrl);
  }

  ngOnInit(){
    this.getUserInfo().subscribe(data=>console.log(data));
  }
}
