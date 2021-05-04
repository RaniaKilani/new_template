import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../models/car';
import { CarService } from './car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  list: Car[];
  constructor(private router:Router, private carService:CarService) {
    this.list = carService.listeCar();
   }
   goToAddPage(AddPage:string):void{
    this.router.navigate([`${AddPage}`]);
}
goToUpdatePage(UpdatePage:string):void{
  this.router.navigate([`${UpdatePage}`]);}

  ngOnInit() {}

}
