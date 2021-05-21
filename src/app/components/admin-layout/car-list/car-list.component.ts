import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../models/car';
import { CarService } from './car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  list: Car[];
  currentCar = new Car();
  constructor(
    private router:Router,
    private carService:CarService,
    private activatedRoute:ActivatedRoute
    ) {
    this.carService.consulterCar(this.activatedRoute.snapshot.params.id).
    subscribe( cr =>{ this.currentCar = cr; console.log(this.currentCar) });
    console.log(this.activatedRoute.snapshot.params.id);

   }
   goToListPage(ListPage:string, Matricule:string):void{
    this.router.navigate([`${ListPage}/${Matricule}`]);}


   goToUpdatePage(UpdatePage:string):void{
  this.router.navigate([`${UpdatePage}`]);}

  ngOnInit() {}
  deleteCar()
  {
    console.log(this.activatedRoute.snapshot.params.id)

  let conf = confirm("Etes-vous sûr ?");
  if (conf)
     this.carService.deleteCar(this.activatedRoute.snapshot.params.id).subscribe(()=>{
     console.log("véhicule supprimé");
    });

    this.router.navigate(['allCars']).then(() => {
     window.location.reload();
     });
  }

}
