import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private user: User;
  constructor() {
    this.user=new User();
  }
  setData(user: User){
    this.user=user;
  }
  getData(){
    return this.user;
  }
  clearData(){
    this.user=new User();
  }
}
