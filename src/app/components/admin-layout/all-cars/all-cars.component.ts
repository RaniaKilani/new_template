import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car-list/car.service';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss'],
})
export class AllCarsComponent implements OnInit {

  constructor(private router:Router, private carService:CarService) { }
  goToAddPage(AddPage:string):void{
    this.router.navigate([`${AddPage}`]);}

  ngOnInit() {}

}
