import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AddEntrtienComponent } from '../add-entrtien/add-entrtien.component';
import { UpdateEntretienComponent } from '../update-entretien/update-entretien.component';

@Component({
  selector: 'app-entretien',
  templateUrl: './entretien.component.html',
  styleUrls: ['./entretien.component.scss'],
})
export class EntretienComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }
  async _openPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: AddEntrtienComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async _Popover(ev: any) {
    const popover = await this.popoverController.create({
      component: UpdateEntretienComponent,
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
