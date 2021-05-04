import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car-list/car.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss'],
})
export class AddCarComponent implements OnInit {

 // newCar = new Car();


  constructor(private carService:CarService) { }
  /*goToListPage( ListPage:string){
    this.router.navigate([`${ListPage}`])

  }*/


  ngOnInit(): void {
  }
 /* addCar(){
    console.log(this.newCar);
    this.carService.addCar(this.newCar);

  }*/
}
