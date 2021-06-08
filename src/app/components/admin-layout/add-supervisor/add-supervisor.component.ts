import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Supervisor } from '../models/supervisor';
import { SupervisorService } from '../supervisor-list/supervisor.service';

@Component({
  selector: 'app-add-supervisor',
  templateUrl: './add-supervisor.component.html',
  styleUrls: ['./add-supervisor.component.scss'],
})
export class AddSupervisorComponent implements OnInit {
newSupervisor = new Supervisor();
form:FormGroup;
  constructor( private supervisorService:SupervisorService, private fb:FormBuilder,private router:Router) {
    this.form=this.fb.group({
      mail:['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      nom:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      pre:['', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      num:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      adr:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      dn:['',[Validators.required]],
      de:['',[Validators.required]],
      pwd:['',[Validators.required,Validators.minLength(6)]],});
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


  goToListPage( ListPage:string){
    this.router.navigate([`${ListPage}`]);}


  ngOnInit(): void {
  }

  addSupervisor(){
    var formdata= new FormData();
    formdata.append('mail',this.form.get('mail').value);
    formdata.append('nom',this.form.get('nom').value)
    formdata.append('pre',this.form.get('pre').value)
    formdata.append('num',this.form.get('num').value)
    formdata.append('adr',this.form.get('adr').value)
    formdata.append('dn',this.form.get('dn').value)
    formdata.append('de',this.form.get('de').value)
    formdata.append('pwd',this.form.get('pwd').value);
    this.supervisorService.addSupervisor(formdata).subscribe(spv => {
      console.log(spv);
      });
     this.router.navigate(['allSupervisors']).then(() => {
      window.location.reload();
       });
}

}
