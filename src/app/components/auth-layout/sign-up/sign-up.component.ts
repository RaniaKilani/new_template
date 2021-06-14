import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  newUser = new User();
  form:FormGroup;
  constructor(
    private userService:UserService,
    private router:Router,
    private fb:FormBuilder,
    private http:HttpClient,
  ) { 
    this.form=this.fb.group({
      mail:['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      nom:['', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      pre:['', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      num:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      adr:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      dn:['',[Validators.required]],
      pwd:['',[Validators.required,Validators.minLength(6)]],
    })
 
  }


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
  get pwd() {
    return this.form.get("pwd");
  }
  get num() {
    return this.form.get("num");
  }
  get dn() {
    return this.form.get("dn");
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
   
    mail: [
      { type: 'required', message: 'le Email est requis' },
      { type: 'pattern', message: 'Veuillez saisir une adresse mail valide' }
    ],
    num: [
      { type: 'required', message: 'le numéro de téléphone est requis' },
      { type: 'pattern', message: 'Veuillez saisir un numéro de téléphone valide' }
    ],
   
    dn: [
      { type: 'required', message: 'la date de naissance  est requise' },
      
    ],
    pwd: [
      { type: 'required', message: 'le mot de passe  est requis' },
      { type: 'minlength', message: 'Le mot de passse ne peut pas être court de 6 caractères' },
    ],
  }

  addUser(){
    
    var formdata= new FormData();
    formdata.append('mail',this.form.get('mail').value);
    formdata.append('nom',this.form.get('nom').value);
    formdata.append('pre',this.form.get('pre').value);
    formdata.append('num',this.form.get('num').value);
    formdata.append('adr',this.form.get('adr').value);
    formdata.append('dn',this.form.get('dn').value);
    formdata.append('pwd',this.form.get('pwd').value);
  
    this.userService.addUser(formdata).subscribe(user => {
    console.log(user);
    });
  //  this.router.navigate(['allDrivers']).then(() => {
  //   window.location.reload();
  //    });
}

  ngOnInit() {}

}
