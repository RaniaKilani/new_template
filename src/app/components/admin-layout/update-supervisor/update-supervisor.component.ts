import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Supervisor } from '../models/supervisor';
import { SupervisorService } from '../supervisor-list/supervisor.service';

@Component({
  selector: 'app-update-supervisor',
  templateUrl: './update-supervisor.component.html',
  styleUrls: ['./update-supervisor.component.scss'],
})
export class UpdateSupervisorComponent implements OnInit {
  currentSupervisor = new Supervisor();
  form: FormGroup;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private supService:SupervisorService) {
      this.form = this.fb.group({
        mail: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        nom: [``,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
        pre: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
        num: ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
        adr: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
        dn: ['',[Validators.required]],
        de: ['',[Validators.required]],
        pwd: ['',[Validators.required,Validators.minLength(6)]],
      }
      );

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


  ngOnInit() {

    this.supService
      .consulterSupervisor(this.activatedRoute.snapshot.params.id)
      .subscribe((sp) => {
        this.currentSupervisor.id = sp.id;
        this.currentSupervisor.mail = sp.Email;
        this.currentSupervisor.nom = sp.Nom;
        this.currentSupervisor.pre = sp.prenom;
        this.currentSupervisor.num = sp.NumTel;
        this.currentSupervisor.dn = sp.DateNaissance;
        this.currentSupervisor.de = sp.DateEmbauche;
        this.currentSupervisor.adr = sp.Adresse;
        this.currentSupervisor.pwd = sp.pwd;
        let date =new Date()
        console.log(date.getFullYear()+"/"+date.getMonth());
        console.log(new Date(1995,2,2));
        this.form.get('mail').setValue(this.currentSupervisor.mail);
        this.form.get('nom').setValue(this.currentSupervisor.nom);
        this.form.get('pre').setValue(this.currentSupervisor.pre);
        this.form.get('adr').setValue(this.currentSupervisor.adr);
        this.form.get('num').setValue(this.currentSupervisor.num);
        this.form.get('dn').setValue(this.currentSupervisor.dn);
        this.form.get('de').setValue(this.currentSupervisor.de);
        this.form.get('pwd').setValue(this.currentSupervisor.pwd);


      });
  }

  editSup() {
    var formdata = new FormData();
    formdata.append('mail', this.form.get('mail').value);
    formdata.append('nom', this.form.get('nom').value);
    formdata.append('pre', this.form.get('pre').value);
    formdata.append('adr', this.form.get('adr').value);
    formdata.append('num', this.form.get('num').value);
    formdata.append('dn', this.form.get('dn').value);
    formdata.append('de', this.form.get('de').value);
    console.log(formdata.get('mail'));
    console.log(this.form);
    console.log(this.form.get('nom').value);
    this.supService
      .editSupervisor(formdata, this.activatedRoute.snapshot.params.id)
      .subscribe((spv) => {
        console.log(spv);
      },(err)=> console.log(err)
      );
    //  this.router.navigate(['allSupervisorss']).then(() => {

    //    });
  }

}
