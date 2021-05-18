import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AddEntrtienComponent } from '../add-entrtien/add-entrtien.component';
import { UpdateEntretienComponent } from '../update-entretien/update-entretien.component';
import { Entretien } from '../models/entretien';
import { CarService } from '../car-list/car.service';


@Component({
  selector: 'app-entretien',
  templateUrl: './entretien.component.html',
  styleUrls: ['./entretien.component.scss'],
})
export class EntretienComponent implements OnInit {
  listE: Entretien[];

  constructor(
    public popoverController: PopoverController,
    private entretienService:CarService) {

     }
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

  ngOnInit() {
    this.entretienService.listeEntretien().subscribe(en => {
      this.listE = en;
      for(let l of this.listE){
        console.log(l)}
  });

}}
