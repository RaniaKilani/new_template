import { Injectable } from '@angular/core';

import { Observable, observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Driver } from '../models/driver';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  apiURL: string = 'http://127.0.0.1:5000/chauffeur';
  list: Driver[];
  driver : Driver;

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http : HttpClient) {

  }
  listeDriver(): Observable<Driver[]>{
    return this.http.get<Driver[]>(this.apiURL);
  }

 addDriver(fordata:FormData){
  return this.http.post(this.apiURL, fordata);

}

 deleteDriver(id : number):Observable<any>{
    const url = `${this.apiURL}/edit/?id=${id}`;
    return this.http.delete(url);
    }

 consulterDriver(id:number): Observable<Driver>{
  const url = `${this.apiURL}/edit/?id=${id}`;
  return this.http.get<Driver>(url);
 }

 editDriver(fordata:FormData, id:number){
  const url = `${this.apiURL}/edit/?id=${id}`;
  return this.http.post(this.apiURL, fordata);


}

}

