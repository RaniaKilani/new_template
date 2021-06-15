import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supervisor } from '../models/supervisor';
import { SupervisorService } from './supervisor.service';

@Component({
  selector: 'app-supervisor-list',
  templateUrl: './supervisor-list.component.html',
  styleUrls: ['./supervisor-list.component.scss'],
})
export class SupervisorListComponent implements OnInit {
  list:Supervisor[];
  currentSupervisor = new Supervisor()
  constructor(
    private supervisorService:SupervisorService,
    private router:Router,
    private activatedRoute :ActivatedRoute)
    {

    }
  goToAddPage(AddPage:string):void{
    this.router.navigate([`${AddPage}`]);
}
goToUpdatePage(UpdatePage:string, id:number):void{
  this.router.navigate([`${UpdatePage}/${id}`]);
}
  ngOnInit(): void {
    this.supervisorService.consulterSupervisor(this.activatedRoute.snapshot.params.id).
    subscribe( sp =>{ this.currentSupervisor = sp; console.log(sp) });
    console.log(this.activatedRoute.snapshot.params.id);
}

   deleteSupervisor()
   {
   let conf = confirm("Etes-vous sûr ?");
   if (conf)
     this.supervisorService.deleteSupervisor(this.activatedRoute.snapshot.params.id).subscribe(()=>{
      console.log("superviseur supprimé");
     });

     this.router.navigate(['allSupervisors']).then(() => {
      window.location.reload();
      });
   }

}
