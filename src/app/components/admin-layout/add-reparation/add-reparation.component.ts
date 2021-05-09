import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-reparation',
  templateUrl: './add-reparation.component.html',
  styleUrls: ['./add-reparation.component.scss'],
})
export class AddReparationComponent implements OnInit {

  constructor(private router:Router) { }
  goToListPage( ListPage:string){
    this.router.navigate([`${ListPage}`]);}

  ngOnInit() {}

}
