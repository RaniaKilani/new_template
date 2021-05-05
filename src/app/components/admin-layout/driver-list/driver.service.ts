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
  apiURL: string = 'http://127.0.0.1:5000/api/Chauffeur';
  list: Driver[];
  driver : Driver;

  constructor(private http : HttpClient) {

  }
  listeDriver(): Observable<Driver[]>{ //tab de driver de type observable
    return this.http.get<Driver[]>(this.apiURL); //retourner liste des chauffeurs
  }

 addDriver( drv: Driver):Observable<Driver>{
  return this.http.post<Driver>(this.apiURL, drv, httpOptions);

}
  //delete
 deleteDriver(id : number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }

 //update
 consulterDriver(id:number): Observable<Driver>{// pour parcourir tableau de driver
  const url = `${this.apiURL}/${id}`;
  return this.http.get<Driver>(url);
 }

 updateDriver(dr :Driver) : Observable<Driver>
{
return this.http.put<Driver>(this.apiURL, dr, httpOptions);
}



}

