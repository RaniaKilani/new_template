import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ReservationComponent } from '../reservation/reservation.component';

@Component({
  selector: 'app-dispo-car',
  templateUrl: './dispo-car.component.html',
  styleUrls: ['./dispo-car.component.scss'],
})
export class DispoCarComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }
  async _openPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ReservationComponent,
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
