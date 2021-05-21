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
  list: Car[] = [];
  Mat: string;
  constructor(private router: Router, private reparationService: CarService) {}
  goToUpdatePage(UpdatePage: string, id: number): void {
    this.router.navigate([`${UpdatePage}/${id}`]);
  }
 
  ngOnInit() {
    this.reparationService.listeReparation().subscribe((rep) => {
      this.listR = rep;
      for (let l of this.listR) {
        this.reparationService.listeCar().subscribe((crr) => {
            for (let c of crr) {
              if (c.Matricule == l['vh']) {
                if(!this.list.find(x=>x.Matricule==c.Matricule)){
                  this.list.push(c);
                }
 
                }
              }
          }
        );
      }
    });
    console.log(this.list);
 
  }
  listRepMatr(mat: string) {
    let la;
    console.log(mat);
    this.reparationService.listRepMat(mat.trim()).subscribe((rep) => {
      la = rep;
      console.log(la);
      this.listR = la[1];
    });
 
    console.log(this.listR);
  }
}