import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Report } from './report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl=environment.baseUrl;
  private getReportsUrl: string;

  constructor(private http: HttpClient) {
    this.getReportsUrl = this.baseUrl+'/generate-report';
  }
  public findAll(): Observable<Report[]> {
    return this.http.get<Report[]>(this.getReportsUrl);
  }
  public findByEmail(email: string) {
    return this.http.get(this.getReportsUrl+'/'+email);
  }
}
