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
  apiURL: string = 'http://127.0.0.1:5000/api/Chauffeur';
  list: Supervisor[];
  supervisor : Supervisor;

  constructor(private http : HttpClient) {

  }
  listeSupervisor(): Observable<Supervisor[]>{
    return this.http.get<Supervisor[]>(this.apiURL);

  }

 addSupervisor( spv: Supervisor):Observable<Supervisor>{
  return this.http.post<Supervisor>(this.apiURL, spv, httpOptions);

}

 deleteSupervisor(id : number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }

 //update
 consulterSupervisor(id:number): Observable<Supervisor>{
  const url = `${this.apiURL}/${id}`;
  return this.http.get<Supervisor>(url);
 }

 updateSupervisor(sp :Supervisor) : Observable<Supervisor>
{
return this.http.put<Supervisor>(this.apiURL, sp, httpOptions);
}



}
