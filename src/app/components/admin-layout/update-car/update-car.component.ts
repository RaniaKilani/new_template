import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car-list/car.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.scss'],
})
export class UpdateCarComponent implements OnInit {
  currentCar = new Car();
  form: FormGroup;
  constructor(
    private carService: CarService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      Matricule:['',[Validators.required,Validators.pattern('^[0-z0-9]+$')]],
      TypeV:['',[Validators.required]],
      AnFab:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      Marque:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      Puiss:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      Kilo:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      ConsoC:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      NbrPlac:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      Cap:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      TypeC:['',[Validators.required]],
      Mot:['',[Validators.required]],
      TypeP:['',[Validators.required]],
    });
   }
   get Matricule() {
    return this.form.get("Matricule");

  }
  get TypeV() {
    return this.form.get("TypeV");

  }
  get AnFab() {
    return this.form.get("AnFab");

  }
  get Marque() {
    return this.form.get("Marque");

  }
  get Puiss() {
    return this.form.get("Puiss");

  }
  get Kilo() {
    return this.form.get("Kilo");

  }
  get ConsoC() {
    return this.form.get("ConsoC");

  }
  get NbrPlac() {
    return this.form.get("NbrPlace");

  }
  get Cap() {
    return this.form.get("Cap");

  }
  get TypeC() {
    return this.form.get("TypeC");

  }
  get TypeP() {
    return this.form.get("TypeP");

  }
  get Mot() {
    return this.form.get("Mot");


  }

  public errorMessages = {
    Matricule: [
      { type: 'required', message: 'la Matricule est requise' },
      { type: 'pattern', message: 'Veuillez saisir une Matricule valide' },


    ],
    TypeV: [
      { type: 'required', message: 'le type de véhicule est requis' },
      { type: 'minlength', message: 'Le type de véhicule ne peut pas être court de 3 caractères' },
      { type: 'maxlength', message: 'Le type de véhicule ne peut pas être  plus long de 20 caractères' }

    ],
    AnFab: [
      { type: 'required', message: 'Année de fabrication est requise'},
    ],
    Marque: [
      { type: 'required', message: 'la marque du superviseur est requise' },
      { type: 'minlength', message: 'La marqe du superviseur ne peut pas être court de 3 caractères' },
      { type: 'maxlength', message: 'La marque du superviseur ne peut pas être plus long de 20 caractères' }

    ],
    Puiss: [
      { type: 'required', message: 'la puissance est requise' },
      { type: 'pattern', message: 'Veuillez saisir puissance valide' }
    ],
    Kilo: [
      { type: 'required', message: 'le Kilométrage est requis' },
      { type: 'pattern', message: 'Veuillez saisir un Kilométrage  valide' }
    ],
    ConsoC: [
      { type: 'required', message: 'la consommation du carburant est requise'},
       { type: 'pattern', message: 'Veuillez saisir un Kilométrage  valide' }
    ],
    NbrPlac: [
       { type: 'required', message: 'le nombre de place   est requis' },
       { type: 'pattern', message: 'Veuillez saisir un nombre de place valide' }

    ],
    Cap: [
      { type: 'required', message: 'la Capacité de embauche est requise' },
      { type: 'pattern', message: 'Veuillez saisir une Capacité valide' }

    ],
   TypeC: [
      { type: 'required', message: 'le type de carburant de passe  est requis' },
    ],
    TypeP: [
      { type: 'required', message: 'le type de permis  est requis' },
    ],
    Mot: [
      { type: 'required', message: 'Objet est requis' },

    ],

  }


  ngOnInit() {
    this.carService
    .consulterCar(this.activatedRoute.snapshot.params.id)
    .subscribe((dr) => {
      this.currentCar.Matricule = dr._id;
      this.currentCar.TypeV = dr.TypeV;
      this.currentCar.AnFab = dr.an;
      this.currentCar.Marque = dr.mr;
      this.currentCar.TypeC = dr.tyC;
      this.currentCar.Puiss = dr.powr;
      this.currentCar.Kilo = dr.kilo;
      this.currentCar.ConsoC = dr.conso;
      this.currentCar.NbrPlac = dr.nb;
      this.currentCar.Cap = dr.cap;
      this.currentCar.TypeP = dr.typeP
      this.currentCar.Mot = dr.Mot

      this.form.get('Matricule').setValue(this.currentCar.Matricule);
      this.form.get('TypeV').setValue(this.currentCar.TypeV);
      this.form.get('AnFab').setValue(this.currentCar.AnFab);
      this.form.get('Marque').setValue(this.currentCar.Marque);
      this.form.get('TypeC').setValue(this.currentCar.TypeC);
      this.form.get('Puiss').setValue(this.currentCar.Puiss);
      this.form.get('Kilo').setValue(this.currentCar.Kilo);
      this.form.get('ConsoC').setValue(this.currentCar.ConsoC);
      this.form.get('Cap').setValue(this.currentCar.Cap);
      this.form.get('NbrPlac').setValue(this.currentCar.NbrPlac);
      this.form.get('TypeP').setValue(this.currentCar.TypeP);
      this.form.get('Mot').setValue(this.currentCar.Mot);
    });
  }
  editCar() {
    var formdata = new FormData();
    formdata.append('Matricule', this.form.get('Matricule').value);
    formdata.append('TypeV', this.form.get('TypeV').value);
    formdata.append('Marque', this.form.get('Marque').value);
    formdata.append('AnFab', this.form.get('AnFab').value);
    formdata.append('TypeC', this.form.get('TypeC').value);
    formdata.append('Puiss', this.form.get('Puiss').value);
    formdata.append('Kilo', this.form.get('Kilo').value);
    formdata.append('ConsoC', this.form.get('ConsoC').value);
    formdata.append('Cap', this.form.get('Cap').value);
    formdata.append('NbrPlac', this.form.get('NbrPlac').value);
    formdata.append('TypeP', this.form.get('TypeP').value);
    formdata.append('Mot', this.form.get('Mot').value);

    console.log(formdata.get('mail'));
    console.log(this.form);
    console.log(this.form.get('nom').value);
    this.carService
      .editCar(formdata, this.activatedRoute.snapshot.params.id)
      .subscribe((drv) => {
        console.log(drv);
      },(err)=> console.log(err)
      );
    //  this.router.navigate(['allDrivers']).then(() => {

    //    });
  }

}
