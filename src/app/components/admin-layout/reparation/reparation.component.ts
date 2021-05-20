import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car-list/car.service';
import { Car } from '../models/car';
import { Reparation } from '../models/reparation';

@Component({
  selector: 'app-reparation',
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.scss'],
})
export class ReparationComponent implements OnInit {
  listR: Reparation[];
  list:Car[];
  Mat:string;
  constructor(
    private router:Router,
    private reparationService:CarService
    ) 
    { 

    }
  goToUpdatePage(UpdatePage:string, id:number):void{
    this.router.navigate([`${UpdatePage}/${id}`]);
  }

  ngOnInit() {
    this.reparationService.listeReparation().subscribe(rep => {
      this.listR = rep;
      for(let l of this.listR){
        console.log(l)}
    });
    this.reparationService.listeCar().subscribe(crr => {
      this.list = crr;
    });
  }
  listRepMatr(mat:string){
    console.log(mat)
    this.reparationService.listRepMat(mat.trim()).subscribe(rep => {
      this.listR = rep;
      for(let l of this.listR){
        console.log(l)}
    });
  
  
  }

}
