import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      Matricule: [''],
      TypeV: [``],
      AnFab: [''],
      Marque: [''],
    TypeC: [''],
      Puiss: [''],
      Kilo: [''],
      ConsoC: [''],
      NbrPlac: [''],
      Cap: [''],
      Dispo:[''],
      TypeP:[''],
      Mot:[''],
    });
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


    });
  }
  editDriver() {
    var formdata = new FormData();
    formdata.append('Matricule', this.form.get('Matricule').value);
    formdata.append('TypeV', this.form.get('TypeV').value);
    formdata.append('AnFab', this.form.get('AnFab').value);
    formdata.append('TypeC', this.form.get('TypeC').value);
    formdata.append('Puiss', this.form.get('Puiss').value);
    formdata.append('Kilo', this.form.get('Kilo').value);
    formdata.append('ConsoC', this.form.get('ConsoC').value);
    formdata.append('Cap', this.form.get('Cap').value);
    formdata.append('NbrPlac', this.form.get('NbrPlac').value);



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
