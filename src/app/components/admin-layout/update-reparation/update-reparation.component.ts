import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car-list/car.service';
import { Reparation } from '../models/reparation';

@Component({
  selector: 'app-update-reparation',
  templateUrl: './update-reparation.component.html',
  styleUrls: ['./update-reparation.component.scss'],
})
export class UpdateReparationComponent implements OnInit {
  currentRep = new Reparation();
  form: FormGroup;
  constructor(
    private repService:CarService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
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
            { type: 'required', message: 'le nom est requis' },

          ],
          codeEnt: [
            { type: 'required', message: 'le prénom est requis' },

          ],
          date: [
            { type: 'required', message: 'Adresse est requis' },

          ],}


  ngOnInit() {
     this.repService
      .consulterRep(this.activatedRoute.snapshot.params.id)
      .subscribe((dr) => {
        this.currentRep.Matricule = dr.vh;
        this.currentRep.codeEnt = dr.En;
        this.currentRep.date = dr.date;

        this.form.get('Matricule').setValue(this.currentRep.Matricule);
        this.form.get('codeEnt').setValue(this.currentRep.codeEnt);
        this.form.get('date').setValue(this.currentRep.date);
      });
  }
  editRep(){
    var formdata= new FormData();
    formdata.append('Matricule',this.form.get('Matricule').value);
    formdata.append('codeEnt',this.form.get('codeEnt').value);
    formdata.append('libelle',this.form.get('libelle').value);
    this.repService.editReparation(formdata,this.activatedRoute.snapshot.params.id).subscribe(rep => {
    console.log(rep);
    },(err)=> console.log(err));

   this.router.navigate(['reparartion']).then(() => {
    window.location.reload();
     });
}


}
