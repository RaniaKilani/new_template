import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Historique } from '../models/historique';
import { Entretien } from '../models/entretien';
import { Reparation } from '../models/reparation';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})


export class CarService {
  apiURL: string = 'http://127.0.0.1:5000/vehicule';
list:Car[];
car : Car;
constructor(private http : HttpClient) {


}
listeCar(): Observable<Car[]>{
  return this.http.get<Car[]>(this.apiURL);

}

AddCar(fordata:FormData){
  return this.http.post(this.apiURL, fordata);

}
consulterCar(Matricule:string): Observable<Car>{
  const url = `${this.apiURL}/?Matricule=${Matricule}`;
  return this.http.get<Car>(url);
}

apiH: string = 'http://127.0.0.1:5000/histo';
consulterHistorique(Matricule:string): Observable<Historique[]>{
  const url = `${this.apiH}/?Matricule=${Matricule}`;
  return this.http.get<Historique[]>(url);
}
// listeHisto(): Observable<Historique[]>{
//   return this.http.get<Historique[]>(this.apiH);}

apiE: string = 'http://127.0.0.1:5000/entretien';
listE :Entretien[];
listeEntretien(): Observable<Entretien[]>{
  return this.http.get<Entretien[]>(this.apiE);}

  AddEntretien(fordata:FormData){
    return this.http.post(this.apiE, fordata);

  }
  // deleteEntretien(code : number):Observable<any>{
  //   const urlE = `${this.apiE}/?code=${code}`;
  //   return this.http.delete(urlE,httpOptions);
  //   }
  apiR: string = 'http://127.0.0.1:5000/reparation';
 listR :Reparation[];
listeReparation(): Observable<Reparation[]>{
  return this.http.get<Reparation[]>(this.apiR);}

  AddReparation(fordata:FormData){
    return this.http.post(this.apiR, fordata);

  }

listRepMat(matricule:string): Observable<Reparation[]>{
  const url = `${this.apiR}/vehicule/?matricule=${matricule}`;
  return this.http.get<Reparation[]>(url);
}
 }
 