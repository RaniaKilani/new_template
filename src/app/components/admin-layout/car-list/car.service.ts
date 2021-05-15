import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { Component, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
list:Car[];
constructor() {


}

listeCar() {
 return this.list;
}
addCar(car : Car){
 return this.list.push(car);
}
}
