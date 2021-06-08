import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { CarService } from '../car-list/car.service';
import { Entretien } from '../models/entretien';

@Component({
  selector: 'app-update-entretien',
  templateUrl: './update-entretien.component.html',
  styleUrls: ['./update-entretien.component.scss'],
})
export class UpdateEntretienComponent implements OnInit {
  currentEnt = new Entretien();
  form: FormGroup;
  constructor(
    private entService:CarService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) {
      this.form=this.fb.group({
        codeEnt:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
        libelle:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    })}

    get codeEnt() {
      return this.form.get("codeEnt");
    }
    get libelle() {
      return this.form.get("libelle");
    }
    public errorMessages = {
      codeEnt: [
        { type: 'required', message: 'le champ code entretien est requis' },
        { type: 'minlength', message: 'Le champ code entretien ne peut pas être court de 3 caractères' },
        { type: 'maxlength', message: 'Le champ code entretien ne peut pas être  plus long de 20 caractères' }
      ],
      libelle: [
        { type: 'required', message: 'le champ libelle est requis' },
        { type: 'minlength', message: 'Le champ libelle ne peut pas être court de 3 caractères' },
          { type: 'maxlength', message: 'Le champ libelle ne peut pas être  plus long de 20 caractères' }

      ],}



  ngOnInit() {
    this.entService
      .consulterEnt(this.activatedRoute.snapshot.params.id)
      .subscribe((dr) => {

        this.currentEnt.codeEnt = dr.codeEnt;
        this.currentEnt.libelle = dr.Libelle;

        this.form.get('codeEnt').setValue(this.currentEnt.codeEnt);
        this.form.get('libelle').setValue(this.currentEnt.libelle);


      });
  }
  editEnt(){
    var formdata= new FormData();
    formdata.append('codeEnt',this.form.get('codeEnt').value);
    formdata.append('libelle',this.form.get('libelle').value);
    this.entService.editEntretien(formdata,this.activatedRoute.snapshot.params.id).subscribe(ent => {
    console.log(ent);
    },(err)=> console.log(err));

   this.router.navigate(['entretien']).then(() => {
    window.location.reload();
     });
}

}
