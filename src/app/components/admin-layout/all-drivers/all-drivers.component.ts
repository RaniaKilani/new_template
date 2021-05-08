import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { DriverListComponent } from '../driver-list/driver-list.component';

@Component({
  selector: 'app-all-drivers',
  templateUrl: './all-drivers.component.html',
  styleUrls: ['./all-drivers.component.scss'],
})
export class AllDriversComponent implements OnInit {

  constructor(public popoverController: PopoverController,private router:Router) { }
  goToAddPage(AddPage:string):void{
    this.router.navigate([`${AddPage}`]);
}

  async _openPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: DriverListComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ngOnInit() {}

}
