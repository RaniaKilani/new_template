import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../car-list/car.service';
import { Car } from '../models/car';
import { Entretien } from '../models/entretien';

@Component({
  selector: 'app-add-reparation',
  templateUrl: './add-reparation.component.html',
  styleUrls: ['./add-reparation.component.scss'],
})
export class AddReparationComponent implements OnInit {
  form:FormGroup;
  list: Car[];
  listE: Entretien[];

  constructor(
    private router:Router,
    private fb:FormBuilder,
    private http:HttpClient,
    private reparationService:CarService,
    private carService:CarService,
    private entretienService:CarService)
    {
      this.form=this.fb.group({
        Matricule:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
        codeEnt:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
        date:['',[Validators.required]],
          })}

          get Matricle() {
            return this.form.get("Matricule");

          }
          get codeEnt() {
            return this.form.get("codeEnt");
          }
          get date() {
            return this.form.get("date");
          }
          public errorMessages = {
            Matricule: [
              { type: 'required', message: 'le champ Matricule est requis' },

            ],
            codeEnt: [
              { type: 'required', message: 'le champ code entretien est requis' },

            ],
            date: [
              { type: 'required', message: 'le champ date est requis' },

            ],}

  goToListPage( ListPage:string){
    this.router.navigate([`${ListPage}`]);}

  ngOnInit() {
    this.carService.listeCar().subscribe(crr => {
      this.list = crr;
    });
    this.entretienService.listeEntretien().subscribe(en => {
      this.listE = en;
  });}

  addReparation(){
    var formdata= new FormData();
    formdata.append('Matricule',this.form.get('Matricule').value.toString().trim());
    formdata.append('codeEnt',this.form.get('codeEnt').value.toString().trim());
    formdata.append('date',this.form.get('date').value);
    console.log(formdata.getAll("Matricule"))
    console.log(formdata.getAll("codeEnt"))
    console.log(formdata.getAll("date"))
    this.reparationService.AddReparation(formdata).subscribe(res=> {
    console.log(res);
    });

  //  this.router.navigate(['reparation']).then(() => {
  //   window.location.reload();
  //    });
}

}
