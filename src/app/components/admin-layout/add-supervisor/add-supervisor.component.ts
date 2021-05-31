import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
form:FormGroup;
  constructor( private supervisorService:SupervisorService, private fb:FormBuilder,private router:Router) {

    this.form=this.fb.group({
      mail:[''],
      nom:[''],
      pre:[''],
      num:[''],
      adr:[''],
      dn:[''],
      de:[''],
      pwd:[''],});
   }

  goToListPage( ListPage:string){
    this.router.navigate([`${ListPage}`]);}


  ngOnInit(): void {
  }

  addSupervisor(){
    var formdata= new FormData();
    formdata.append('mail',this.form.get('mail').value);
    formdata.append('nom',this.form.get('nom').value)
    formdata.append('pre',this.form.get('pre').value)
    formdata.append('num',this.form.get('num').value)
    formdata.append('adr',this.form.get('adr').value)
    formdata.append('dn',this.form.get('dn').value)
    formdata.append('de',this.form.get('de').value)
    formdata.append('pwd',this.form.get('pwd').value);
    this.supervisorService.addSupervisor(formdata).subscribe(spv => {
      console.log(spv);
      });
     this.router.navigate(['allSupervisors']).then(() => {
      window.location.reload();
       });
}

}
