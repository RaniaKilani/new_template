import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { SupervisorListComponent } from '../supervisor-list/supervisor-list.component';

@Component({
  selector: 'app-all-supervisor',
  templateUrl: './all-supervisor.component.html',
  styleUrls: ['./all-supervisor.component.scss'],
})
export class AllSupervisorComponent implements OnInit {

  constructor(public popoverController: PopoverController, private router:Router) { }

  goToAddPage(AddPage:string):void{
    this.router.navigate([`${AddPage}`]);
}

  async _openPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: SupervisorListComponent,
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
