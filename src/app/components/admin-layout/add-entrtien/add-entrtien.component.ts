import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../car-list/car.service';

@Component({
  selector: 'app-add-entrtien',
  templateUrl: './add-entrtien.component.html',
  styleUrls: ['./add-entrtien.component.scss'],
})
export class AddEntrtienComponent implements OnInit {
  form:FormGroup;
  constructor(
    private entretienService:CarService,
     private router:Router,
     private fb:FormBuilder,
     private http:HttpClient
  ) {
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
      { type: 'required', message: 'le champ nom entretien est requis' },
      { type: 'minlength', message: 'Le champ nom entretien ne peut pas être court de 3 caractères' },
        { type: 'maxlength', message: 'Le champ nom entretien ne peut pas être  plus long de 20 caractères' }

    ],}

  ngOnInit() {}
  addEntretien(){
    var formdata= new FormData();
    formdata.append('codeEnt',this.form.get('codeEnt').value);
    formdata.append('libelle',this.form.get('libelle').value);
    this.entretienService.AddEntretien(formdata).subscribe(ent => {
    console.log(ent);
    });
   this.router.navigate(['entretien']).then(() => {
    window.location.reload();
     });
}
}
