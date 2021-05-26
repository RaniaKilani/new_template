import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car-list/car.service';
import { Car } from '../models/car';
import { Entretien } from '../models/entretien';
import { Reparation } from '../models/reparation';

@Component({
  selector: 'app-reparation',
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.scss'],
})
export class ReparationComponent implements OnInit {
  listR: Reparation[];
  list: Car[] = [];
  listE: Entretien[] = [];
  Mat: string;
  Ent:string;
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
   // console.log(this.list);

   this.reparationService.listeEntretien().subscribe(en => {
    this.listE = en;
    for (let l of this.listE) {
      this.reparationService.listeEntretien().subscribe((enn) => {
          for (let e of enn) {
            if (e.codeEnt == l['En']) {
              if(!this.listE.find(x=>x.codeEnt==e.codeEnt)){
                this.listE.push(e);
              }

              }
            }
        }
      );
    }
});

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
  listRepEnt(code: string){
    let la;
    console.log(code);
    this.reparationService.listRepEnt(code.trim()).subscribe((en) => {
      la = en;
      console.log(la);
      this.listE = la[1];
    });
    console.log(this.listE);
  }
  deleteRep(ref:string)
  {
    console.log(ref)

  let conf = confirm("Etes-vous sûr ?");
  if (conf)
     this.reparationService.deleteReparation(ref).subscribe(()=>{
     console.log("reparation supprimé");
    });

    // this.router.navigate(['entrtient']).then(() => {
    //  window.location.reload();
    //  });
  }}
