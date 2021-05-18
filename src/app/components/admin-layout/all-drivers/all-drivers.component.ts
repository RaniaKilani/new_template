import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { DriverListComponent } from '../driver-list/driver-list.component';
import { DriverService } from '../driver-list/driver.service';
import { Driver } from '../models/driver';

@Component({
  selector: 'app-all-drivers',
  templateUrl: './all-drivers.component.html',
  styleUrls: ['./all-drivers.component.scss'],
})
export class AllDriversComponent implements OnInit {
  list: Driver[];

  constructor(public popoverController: PopoverController,
    private router:Router,
    private activatedRoute :ActivatedRoute,
    private driverService:DriverService) {
      
     }
  goToAddPage(AddPage:string):void{
    this.router.navigate([`${AddPage}`]);}

    goToListPage(ListPage:string, id:number):void{
      this.router.navigate([`${ListPage}/${id}`]);
}

  async _openPopover(ev: any, id:number) {
    console.log(ev)
    const popover = await this.popoverController.create({
      component: DriverListComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,

    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ngOnInit() {
    this.driverService.listeDriver().subscribe(dr => {
      this.list = dr;

      });
  }

}
