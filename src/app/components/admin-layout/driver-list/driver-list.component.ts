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
  constructor(private driverService:DriverService,private router:Router,private activatedRoute :ActivatedRoute) {

    /* this.list = driverService.listeDriver(); */
  }

goToUpdatePage(UpdatePage:string, id:number):void{
  this.router.navigate([`${UpdatePage}/${id}`]);
}

  ngOnInit(): void {
    this.driverService.listeDriver().subscribe(dr => {
      this.list = dr;
      for(let l of this.list){
        console.log(l)

      }

      });
  }



   deleteDriver(id : number)
   {

   let conf = confirm("Etes-vous sûr ?");
   if (conf)
     this.driverService.deleteDriver(id).subscribe(()=>{
      console.log("chauffeur supprimé");


     });

     this.router.navigate(['listDriver']).then(() => {
      window.location.reload();
      });
   }


}
