import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      codeEnt:[''],
      libelle:[''],
  })}

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
