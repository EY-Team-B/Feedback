import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private baseUrl = environment.baseUrl;
  private getUsersUrl: string;
  private addUserUrl: string;
  private deleteUserUrl: string;
  private updateUrl: string;

  constructor(private http: HttpClient) {
    this.getUsersUrl = this.baseUrl + '/view-all-users';
    this.addUserUrl = this.baseUrl + '/add-user';
    this.deleteUserUrl = this.baseUrl + '/deleteUser';
    this.updateUrl = this.baseUrl + '/update';
  }
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.getUsersUrl);
  }
  public save(user: User) {
    return this.http.post(this.addUserUrl, user, { responseType: 'text' });
  }
  public delete(email: string) {
    return this.http.delete(this.deleteUserUrl + '/' + email, {
      responseType: 'text',
    });
  }
  public update(email: string, user: User) {
    return this.http.put(this.updateUrl + '/' + email, user, {
      responseType: 'text',
    });
  }
}
