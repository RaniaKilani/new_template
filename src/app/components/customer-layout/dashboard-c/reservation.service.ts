import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})


export class ReservationService {
  apiURL: string = 'http://127.0.0.1:5000/reservation';
list:Reservation[];
reservation : Reservation;
constructor(private http : HttpClient) {


}
listReservation(): Observable<Reservation[]>{
  return this.http.get<Reservation[]>(this.apiURL);

}

AddReservation(fordata:FormData){
  return this.http.post(this.apiURL, fordata);

}
// deleteCar(Matricule : number):Observable<any>{
//   const url = `${this.apiURL}/?Matricule=${Matricule}`;
//   return this.http.delete(url);
//   }
// consulterCar(Matricule:string): Observable<Car>{
//   const url = `${this.apiURL}/?Matricule=${Matricule}`;
//   return this.http.get<Car>(url);
// }







 }
