import { Injectable } from '@angular/core';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
list:Car[];
constructor() {
  //to declare a static list of cars
  this.list = [{'Matricule':'cccc' ,'TypeVehicule':'voiture','AnneeFabrication':new Date('10/25/2015'),'Marque': 'clio', 'TypeCarburant':'Essence','Puissance':4444,'Kilometrage':157,'ConsommationCarburant':5555,'NombrePlace' : 2,'Capacite':123, 'Disponibilite':'dispo','TypePermis':['A','B',],'MotCle':'livraison'},


 {'Matricule':'cccc' ,'TypeVehicule':'voiture','AnneeFabrication':new Date('10/25/2015'),'Marque': 'clio', 'TypeCarburant':'Essence','Puissance':4444,'Kilometrage':157,'ConsommationCarburant':5555,'NombrePlace' : 2,'Capacite':123, 'Disponibilite':'dispo','TypePermis':['A','B',],'MotCle':'livraison'}
, {'Matricule':'cccc' ,'TypeVehicule':'voiture','AnneeFabrication':new Date('10/25/2015'),'Marque': 'clio', 'TypeCarburant':'Essence','Puissance':4444,'Kilometrage':157,'ConsommationCarburant':5555,'NombrePlace' : 2,'Capacite':123, 'Disponibilite':'dispo','TypePermis':['A','B',],'MotCle':'livraison'}
, {'Matricule':'cccc' ,'TypeVehicule':'voiture','AnneeFabrication':new Date('10/25/2015'),'Marque': 'clio', 'TypeCarburant':'Essence','Puissance':4444,'Kilometrage':157,'ConsommationCarburant':5555,'NombrePlace' : 2,'Capacite':123, 'Disponibilite':'dispo','TypePermis':['A','B',],'MotCle':'livraison'}
, {'Matricule':'cccc' ,'TypeVehicule':'voiture','AnneeFabrication':new Date('10/25/2015'),'Marque': 'clio', 'TypeCarburant':'Essence','Puissance':4444,'Kilometrage':157,'ConsommationCarburant':5555,'NombrePlace' : 2,'Capacite':123, 'Disponibilite':'dispo','TypePermis':['A','B',],'MotCle':'livraison'}


];
}
//return list of cars
listeCar() {
 return this.list;
}
addCar(car : Car){
 return this.list.push(car);
}
}
