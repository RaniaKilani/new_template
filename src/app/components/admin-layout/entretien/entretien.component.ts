import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AddEntrtienComponent } from '../add-entrtien/add-entrtien.component';
import { UpdateEntretienComponent } from '../update-entretien/update-entretien.component';
import { Entretien } from '../models/entretien';
import { CarService } from '../car-list/car.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-entretien',
  templateUrl: './entretien.component.html',
  styleUrls: ['./entretien.component.scss'],
})
export class EntretienComponent implements OnInit {
  listE: Entretien[];
 

  constructor(
    public popoverController: PopoverController,
    private carService:CarService,
    private activatedRoute:ActivatedRoute) {

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
    this.carService.listeEntretien().subscribe(en => {
      this.listE = en;
      for(let l of this.listE){
        console.log(l)}
  });

}
deleteEnt(code:number)
{
  console.log(code)

let conf = confirm("Etes-vous sûr ?");
if (conf)
   this.carService.deleteEntretien(code).subscribe(()=>{
   console.log("entretien supprimé");
  });

  // this.router.navigate(['entrtient']).then(() => {
  //  window.location.reload();
  //  });
}
}
