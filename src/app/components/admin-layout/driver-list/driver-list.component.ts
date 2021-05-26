import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../models/driver';
import { DriverService } from './driver.service';



@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit {

  list: Driver[];
  currentDriver = new Driver()
  constructor(
    private driverService:DriverService,
    private router:Router,
    private activatedRoute:ActivatedRoute) {
  }

goToUpdatePage(UpdatePage:string, id:number):void{
  this.router.navigate([`${UpdatePage}/${id}`]);
}
  ngOnInit(): void {
      this.driverService.consulterDriver(this.activatedRoute.snapshot.params.id).
    subscribe( dr =>{ this.currentDriver = dr; console.log(dr) });
    console.log(this.activatedRoute.snapshot.params.id);
}
   deleteDriver()
   {
     console.log(this.activatedRoute.snapshot.params.id)

   let conf = confirm("Etes-vous sûr ?");
   if (conf)
      this.driverService.deleteDriver(this.activatedRoute.snapshot.params.id).subscribe(()=>{
      console.log("chauffeur supprimé");
     });

     this.router.navigate(['allDrivers']).then(() => {
      window.location.reload();
      });
   }


}
