import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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
  form:FormGroup;
  typ=[];
  constructor(
    private driverService:DriverService,
     private router:Router,
     private fb:FormBuilder,
     private http:HttpClient) {
    this.form=this.fb.group({
  mail:[''],
  nom:[''],
  pre:[''],
  ntel:[''],
  adr:[''],
  dn:[''],
  de:[''],
  nomsup:[''],
  typ:[''],
  pwd:[''],
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

  ngOnInit(): void {
  }
  addDriver(){
    let selected = this.form.get('typ').value.toString().split(",").map(x=>x.trim())
    var formdata= new FormData();
    formdata.append('mail',this.form.get('mail').value);
    formdata.append('nom',this.form.get('nom').value);
    formdata.append('pre',this.form.get('pre').value);
    formdata.append('ntel',this.form.get('ntel').value);
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
