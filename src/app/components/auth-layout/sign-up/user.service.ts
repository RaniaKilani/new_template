import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string = 'http://127.0.0.1:5000/user';
  user : User;

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http : HttpClient) {

  }
  addUser(fordata:FormData){
    return this.http.post(this.apiURL, fordata);
  
  }

}
