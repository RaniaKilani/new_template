import { Component, NgZone, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverService } from '../driver-list/driver.service';
import { Driver } from '../models/driver';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss'],
})
export class AddDriverComponent implements OnInit {
  newDriver = new Driver();
  submitted = false;
  form:FormGroup;
  typ=[];
  constructor(
    private driverService:DriverService,
     private router:Router,
     private fb:FormBuilder,
     private http:HttpClient,
     private ngZone: NgZone,) {
    this.form=this.fb.group({
  mail:['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
  nom:['', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
  pre:['', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
  num:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
  adr:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
  dn:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
  de:['',[Validators.required,Validators.minLength(3)]],
  nomsup:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
  typ:['',[Validators.required]],
  pwd:['',[Validators.required,Validators.minLength(6)]],
    })
    this.typ= this.getPermis();
  }
  getPermis() {
    return [
      { id: '1', name: 'A' },
      { id: '2', name: 'B' },
      { id: '3', name: 'C' },
      { id: '4', name: 'D' },
      { id: '5', name: 'E' },
      { id: '6', name: 'H' },
    ];}

    get mail() {
      return this.form.get("mail");

    }
    get nom() {
      return this.form.get("nom");
    }
    get pre() {
      return this.form.get("pre");
    }
    get adr() {
      return this.form.get("adr");
    }
    get nomsup() {
      return this.form.get("nomsup");
    }
    get pwd() {
      return this.form.get("pwd");
    }
    get num() {
      return this.form.get("num");
    }
    get dn() {
      return this.form.get("dn");
    }
    get de() {
      return this.form.get("de");
    }



    public errorMessages = {
      nom: [
        { type: 'required', message: 'le nom est requis' },
        { type: 'minlength', message: 'Le nom ne peut pas être court de 3 caractères' },
        { type: 'maxlength', message: 'Le nom ne peut pas être pls long de 20 caractères' }

      ],
      pre: [
        { type: 'required', message: 'le prénom est requis' },
        { type: 'minlength', message: 'Le prénom ne peut pas être court de 3 caractères' },
        { type: 'maxlength', message: 'Le prénom ne peut pas être  plus long de 20 caractères' }

      ],
      adr: [
        { type: 'required', message: 'Adresse est requis' },
        { type: 'minlength', message: 'Adress ne peut pas être court de 3 caractères' },
        { type: 'maxlength', message: 'Adress ne peut pas être plus long de 20 caractères' },


      ],
      nomsup: [
        { type: 'required', message: 'le nom du superviseur est requis' },
        { type: 'minlength', message: 'Le nom du superviseur ne peut pas être court de 3 caractères' },
        { type: 'maxlength', message: 'Le nom du superviseur ne peut pas être plus long de 20 caractères' }

      ],
      mail: [
        { type: 'required', message: 'le Email est requis' },
        { type: 'pattern', message: 'Veuillez saisir une adresse mail valide' }
      ],
      num: [
        { type: 'required', message: 'le numéro de téléphone est requis' },
        { type: 'pattern', message: 'Veuillez saisir un numéro de téléphone valide' }
      ],
      typ: [
        { type: 'required', message: 'le type de permis est requis' }
      ],
      dn: [
        { type: 'required', message: 'la date de naissance  est requise' },
        { type: 'pattern', message: 'Please enter a valid phone number' }
      ],
      de: [
        { type: 'required', message: 'la date de embauche est requise' },
        { type: 'pattern', message: 'Please enter a valid phone number' }
      ],

    }

  ngOnInit(): void {
  }
  addDriver(){
    let selected = this.form.get('typ').value.toString().split(",").map(x=>x.trim())
    var formdata= new FormData();
    formdata.append('mail',this.form.get('mail').value);
    formdata.append('nom',this.form.get('nom').value);
    formdata.append('pre',this.form.get('pre').value);
    formdata.append('num',this.form.get('num').value);
    formdata.append('adr',this.form.get('adr').value);
    formdata.append('dn',this.form.get('dn').value);
    formdata.append('de',this.form.get('de').value);
    formdata.append('nomsup',this.form.get('nomsup').value);
    formdata.append('pwd',this.form.get('pwd').value);
    formdata.append('typ',selected);
    this.driverService.addDriver(formdata).subscribe(drv => {
    console.log(drv);
    });
  //  this.router.navigate(['allDrivers']).then(() => {
  //   window.location.reload();
  //    });
}

}
