import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverService } from '../driver-list/driver.service';
import { Driver } from '../models/driver';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.scss'],
})
export class UpdateDriverComponent implements OnInit {
  currentDriver = new Driver();
  form: FormGroup;

  constructor(
    private driverService: DriverService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
       )     {
    this.form = this.fb.group({
      mail: [''],
      nom: [``],
      pre: [''],
      num: [''],
      adr: [''],
      dn: [''],
      de: [''],
      typ: [''],
      nomsup: [''],
      pwd: [''],
    });
  }

  ngOnInit() {
    this.driverService
      .consulterDriver(this.activatedRoute.snapshot.params.id)
      .subscribe((dr) => {
        this.currentDriver.id = dr.id;
        this.currentDriver.mail = dr.Email;
        this.currentDriver.nom = dr.Nom;
        this.currentDriver.pre = dr.prenom;
        this.currentDriver.num = dr.NumTel;
        this.currentDriver.dn = dr.DateNaissance;
        this.currentDriver.de = dr.DateEmbauche;
        this.currentDriver.adr = dr.Adresse;
        this.currentDriver.nomsup = dr.NomSup;
        this.currentDriver.pwd = dr.pwd;
        this.currentDriver.typ = dr.TypesPermis;
        let date =new Date()
        console.log(date.getFullYear()+"/"+date.getMonth());
        console.log(new Date(1995,2,2));
        let selected = this.form.get('typ').setValue.toString().split(",").map(x=>x.trim())
        this.form.get('mail').setValue(this.currentDriver.mail);
        this.form.get('nom').setValue(this.currentDriver.nom);
        this.form.get('pre').setValue(this.currentDriver.pre);
        this.form.get('adr').setValue(this.currentDriver.adr);
        this.form.get('num').setValue(this.currentDriver.num);
        this.form.get('dn').setValue(this.currentDriver.dn);
        this.form.get('de').setValue(this.currentDriver.de);
        this.form.get('nomsup').setValue(this.currentDriver.nomsup);
        this.form.get('pwd').setValue(this.currentDriver.pwd);
        this.form.get('typ').setValue(this.currentDriver.typ);


      });
  }

  editDriver() {
    let selected = this.form.get('typ').value.toString().split(",").map(x=>x.trim())
    var formdata = new FormData();
    formdata.append('mail', this.form.get('mail').value);
    formdata.append('nom', this.form.get('nom').value);
    formdata.append('pre', this.form.get('pre').value);
    formdata.append('adr', this.form.get('adr').value);
    formdata.append('num', this.form.get('num').value);
    formdata.append('dn', this.form.get('dn').value);
    formdata.append('de', this.form.get('de').value);
    formdata.append('typ',selected);
    console.log(formdata.get('mail'));
    console.log(this.form);
    console.log(this.form.get('nom').value);
    this.driverService
      .editDriver(formdata, this.activatedRoute.snapshot.params.id)
      .subscribe((drv) => {
        console.log(drv);
      },(err)=> console.log(err)
      );
    //  this.router.navigate(['allDrivers']).then(() => {

    //    });
  }
}
