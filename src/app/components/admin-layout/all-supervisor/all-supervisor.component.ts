import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Supervisor } from '../models/supervisor';
import { SupervisorListComponent } from '../supervisor-list/supervisor-list.component';
import { SupervisorService } from '../supervisor-list/supervisor.service';

@Component({
  selector: 'app-all-supervisor',
  templateUrl: './all-supervisor.component.html',
  styleUrls: ['./all-supervisor.component.scss'],
})
export class AllSupervisorComponent implements OnInit {
  list: Supervisor[];

  constructor(
    public popoverController: PopoverController,
     private router:Router,
     private supervisorService:SupervisorService) {

      }

  goToAddPage(AddPage:string):void{
    this.router.navigate([`${AddPage}`]);
}
  goToListPage(ListPage:string, id:number):void{
  this.router.navigate([`${ListPage}/${id}`]);
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


  ngOnInit() {

    this.supervisorService.listeSupervisor().subscribe(sp => {
      this.list = sp;
      for(let l of this.list){
        console.log(l)

      }

      });
  }

}
