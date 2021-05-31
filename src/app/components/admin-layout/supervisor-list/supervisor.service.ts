import { Injectable } from '@angular/core';

import { Observable, observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Supervisor } from '../models/supervisor';



const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

apiURL: string = 'http://127.0.0.1:5000/superviseur';
  list: Supervisor[];
  supervisor : Supervisor;

  constructor(private http : HttpClient) {

  }
 listeSupervisor(): Observable<Supervisor[]>{
    return this.http.get<Supervisor[]>(this.apiURL);
  }

 addSupervisor(fordata:FormData){
    return this.http.post(this.apiURL, fordata);
  }
 deleteSupervisor(id : number):Observable<any>{
  const url = `${this.apiURL}/?id=${id}`;
    return this.http.delete(url, httpOptions);
    }

 consulterSupervisor(id:number): Observable<any>{
  const url = `${this.apiURL}/?id=${id}`;
  return this.http.get<any>(url);
  }

 editSupervisor(fordata:FormData, id:number){
  const url = `${this.apiURL}/?id=${id}`;
   return this.http.post(url, fordata);
  }
}

