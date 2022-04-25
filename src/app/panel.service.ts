import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Panel } from './panel';
import { Status } from './status';

@Injectable({
  providedIn: 'root',
})
export class PanelService {
  private baseUrl = environment.baseUrl;
  private panelUrl: string;
  private scheduleUrl: string;
  private addStatusUrl: string;
  constructor(private http: HttpClient) {
    this.panelUrl = this.baseUrl + '/viewall-panel';
    this.scheduleUrl = this.baseUrl + '/edit-candidate/';    
    this.addStatusUrl=this.baseUrl+'/add-status';
  }
  findAll(): Observable<Panel[]> {
    return this.http.get<Panel[]>(this.panelUrl);
  }

  schledule(id: number, data: FormData) {
    return this.http.put(this.scheduleUrl + id, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
  public save(status: Status) {
    return this.http.post(this.addStatusUrl + '/' + status, {
      responseType: 'text',
    });
}
}