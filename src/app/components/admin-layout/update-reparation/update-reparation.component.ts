import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
     this.form = this.fb.group({
      Matricule:[''],
      codeEnt:[''],
      date:[''],
      });
   }

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
