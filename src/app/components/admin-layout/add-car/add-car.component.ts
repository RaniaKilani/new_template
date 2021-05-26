import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      Matricule:[''],
      TypeV:[''],
      AnFab:[''],
      Marque:[''],
      Puiss:[''],
      Kilo:[''],
      ConsoC:[''],
      NbrPlace:[''],
      Cap:[''],
      TypeC:[''],
      Mot:[''],
      TypeP:[''],
    })
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
