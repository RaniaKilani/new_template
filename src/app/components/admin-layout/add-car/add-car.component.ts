import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../car-list/car.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss'],
})
export class AddCarComponent implements OnInit {
  newCar = new Car();
  form:FormGroup;
  constructor(private carService:CarService,
    private router:Router,
     private fb:FormBuilder,
     private http:HttpClient) {
      this.form=this.fb.group({
      Matricule:['',[Validators.required,Validators.pattern('^[0-z0-9]+$')]],
      TypeV:['',[Validators.required]],
      AnFab:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      Marque:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      Puiss:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      Kilo:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      ConsoC:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      NbrPlace:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      Cap:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      TypeC:['',[Validators.required]],
      Mot:['',[Validators.required]],
      TypeP:['',[Validators.required]],
    })
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
      get NbrPlace() {
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
        NbrPlace: [
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
  ngOnInit(): void {
  }

  addCar(){
    let selected = this.form.get('Mot').value.toString().split(",").map(x=>x.trim())
    var formdata= new FormData();
    formdata.append('Matricule',this.form.get('Matricule').value);
    formdata.append('TypeV',this.form.get('TypeV').value);
    formdata.append('AnFab',this.form.get('AnFab').value);
    formdata.append('Marque',this.form.get('Marque').value);
    formdata.append('Puiss',this.form.get('Puiss').value);
    formdata.append('Kilo',this.form.get('Kilo').value);
    formdata.append('ConsoC',this.form.get('ConsoC').value);
    formdata.append('NbrPlace',this.form.get('NbrPlace').value);
    formdata.append('Cap',this.form.get('Cap').value);
    formdata.append('TypeC',this.form.get('TypeC').value);
    formdata.append('TypeP',this.form.get('TypeP').value);
    formdata.append('Mot',selected);
    console.log(formdata.getAll("Mot"));
    this.carService.AddCar(formdata).subscribe(cr => {
    console.log(cr);
    });
  //  this.router.navigate(['allCars']).then(() => {
  //   window.location.reload();
  //    });
}
}
