import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../driver-list/driver.service';
import { Driver } from '../models/driver';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss'],
})
export class AddDriverComponent implements OnInit {
  newDriver = new Driver();


  constructor(private driverService:DriverService, private router:Router) { }

  goToListPage( ListPage:string){
    this.router.navigate([`${ListPage}`]);}

  ngOnInit(): void {
  }
 /* addDriver(){
    console.log(this.newDriver);
    this.driverService.addDriver(this.newDriver);

  }*/
  addDriver(){
    this.driverService.addDriver(this.newDriver).subscribe(drv => {
    console.log(drv);
    });
    this.router.navigate(['listDriver']).then(() => {

      });
}

}
