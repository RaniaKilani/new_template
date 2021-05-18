import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car-list/car.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss'],
})
export class AllCarsComponent implements OnInit {
  list: Car[];

  constructor(private router:Router, private carService:CarService) { }
  goToAddPage(AddPage:string):void{
    this.router.navigate([`${AddPage}`]);}
    
    goToListPage(ListPage:string, Matricule:string):void{
      this.router.navigate([`${ListPage}/${Matricule}`]);}

  ngOnInit(){
  this.carService.listeCar().subscribe(crr => {
    this.list = crr;
    for(let l of this.list){
      console.log(l)}
  });
}

}
