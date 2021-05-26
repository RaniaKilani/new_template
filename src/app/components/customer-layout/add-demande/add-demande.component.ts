import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationService } from '../dashboard-c/reservation.service';
import { DemandeService } from '../demande.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-add-demande',
  templateUrl: './add-demande.component.html',
  styleUrls: ['./add-demande.component.scss'],
})
export class AddDemandeComponent implements OnInit {
  newRes = new Reservation();
  form:FormGroup;
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private http:HttpClient,
    private reqService:DemandeService) {
       this.form=this.fb.group({
      objet:[''],
      type:[''],
      nbplc:[''],
      cap:[''],
      dateR:[''],
      dateF:[''],
      region:[''],
      departement:[''],
      rue:[''],
      chauffeur:[''],
      urgent:[''],

    })
      }


  ngOnInit() {}
  addReq(){
    var formdata= new FormData();
    formdata.append('objet',this.form.get('objet').value);
    formdata.append('type',this.form.get('type').value);
    formdata.append('nbplc',this.form.get('nbplc').value);
    formdata.append('cap',this.form.get('cap').value);
    formdata.append('dateR',this.form.get('dateR').value);
    formdata.append('dateF',this.form.get('dateF').value);
    formdata.append('region',this.form.get('region').value);
    formdata.append('departement',this.form.get('departement').value);
    formdata.append('rue',this.form.get('rue').value);
    formdata.append('chauffeur',this.form.get('chauffeur').value);
    formdata.append('urgent',this.form.get('urgent').value);
    this.reqService.AddRequest(formdata).subscribe(cr => {
    console.log(cr);
    });
  //  this.router.navigate(['dispo-car']).then(() => {
  //   window.location.reload();
  //    });
}

}
