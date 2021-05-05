import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supervisor } from '../models/supervisor';
import { SupervisorService } from '../supervisor-list/supervisor.service';

@Component({
  selector: 'app-add-supervisor',
  templateUrl: './add-supervisor.component.html',
  styleUrls: ['./add-supervisor.component.scss'],
})
export class AddSupervisorComponent implements OnInit {
newSupervisor = new Supervisor();
  constructor( private supervisorService:SupervisorService, private router:Router) { }

  goToListPage( ListPage:string){
    this.router.navigate([`${ListPage}`]);}

  ngOnInit(): void {
  }

  addSupervisor(){
    this.supervisorService.addSupervisor(this.newSupervisor).subscribe(spv => {
    console.log(spv);
    });
    this.router.navigate(['listSupervisor']).then(() => {

      });
}

}
