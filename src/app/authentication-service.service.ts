import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  private authorizeEndpoint = '/oauth2/authorization/google'
  private tokenEndpoint = '/login/oauth2/code/google';
  private baseUrl = environment.baseUrl;
  private tokenKey = 'token';

  constructor(private http: HttpClient) {
  }

  login() {
    window.open(this.baseUrl + this.authorizeEndpoint, '_self');
  }

  updateToken(token: any) {
    localStorage.setItem(this.tokenKey, token);
  }

  fetchToken(code: any, state: any): Observable<any> {
    return this.http.get(this.baseUrl + this.tokenEndpoint + '?code=' + code + '&state=' + state);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return token != null;
  }

  validation(): Observable<any>{
    return this.http.get(this.baseUrl+"/validate", { responseType: "text"});
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }

  logout() {
    return this.http.post(this.baseUrl + '/logout', this.getToken());
  }

}
