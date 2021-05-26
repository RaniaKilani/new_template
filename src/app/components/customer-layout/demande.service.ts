import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Demande } from './models/demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  apiURL: string = 'http://127.0.0.1:5000/demande';
list:Demande[];
demande : Demande;
  constructor(private http : HttpClient) { }

  AddRequest(fordata:FormData){
    return this.http.post(this.apiURL, fordata);

  }
}
