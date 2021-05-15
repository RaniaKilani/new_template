import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverService } from '../driver-list/driver.service';
import { Driver } from '../models/driver';

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.scss'],
})
export class UpdateDriverComponent implements OnInit {
  currentDriver = new Driver();
  form:FormGroup;

  constructor(private driverService : DriverService ,private router:Router, private activatedRoute :ActivatedRoute, private fb:FormBuilder) {
    this.form=this.fb.group({
      mail:[''],
      nom:[''],
      pre:[''],
      ntel:[''],
      adr:[''],
      dn:[''],
      de:[''],
     
        })
   }

  ngOnInit() {
    this.driverService.consulterDriver(this.activatedRoute.snapshot.params.id).
    subscribe( dr =>{ this.currentDriver = dr[1]; console.log(dr[1]) });
    console.log(this.activatedRoute.snapshot.params.id);
    console.log(this.currentDriver)
  }

  editDriver(){
    var formdata= new FormData();
    formdata.append('mail',this.form.get('mail').value);
    formdata.append('nom',this.form.get('nom').value);
    formdata.append('pre',this.form.get('pre').value);
    formdata.append('adr',this.form.get('adr').value);
    formdata.append('ntel',this.form.get('ntel').value);
    formdata.append('dn',this.form.get('dn').value);
    formdata.append('de',this.form.get('de').value);
    console.log(formdata.get('mail'))
    console.log(this.form)
    console.log(this.form.get('nom').value)
    this.driverService.editDriver(formdata,this.activatedRoute.snapshot.params.id).subscribe(drv => {
    console.log(drv);
    });
  //  this.router.navigate(['allDrivers']).then(() => {

  //    });
  }

}
