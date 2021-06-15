import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car-list/car.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss'],
})
export class AllCarsComponent implements OnInit {
  list: Car[];

  constructor(private router:Router, private carService:CarService,
    private activatedRoute:ActivatedRoute
    ) { }
  goToAddPage(AddPage:string):void{
    this.router.navigate([`${AddPage}`]);}

    goToListPage(ListPage:string, Matricule:string):void{
      this.router.navigate([`${ListPage}/${Matricule}`]);}
      goToUpdatePage(UpdatePage:string, Matricule:string):void{
        this.router.navigate([`${UpdatePage}/${Matricule}`]);}
        goToHistoPage(HistoPage:string, Matricule:string):void{
          this.router.navigate([`${HistoPage}/${Matricule}`]);}

  ngOnInit(){
  this.carService.listeCar().subscribe(crr => {
    this.list = crr;
    for(let l of this.list){
      console.log(l)}
  });
}
deleteCar(Matricule:number)
{
  console.log(this.activatedRoute.snapshot.params.id)

let conf = confirm("Etes-vous sûr ?");
if (conf)
   this.carService.deleteCar(Matricule).subscribe(()=>{
   console.log("véhicule supprimé");
  });

  this.router.navigate(['allCars']).then(() => {
   window.location.reload();
   });
}

}
