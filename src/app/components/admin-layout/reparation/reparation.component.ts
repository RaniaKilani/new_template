import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reparation',
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.scss'],
})
export class ReparationComponent implements OnInit {

  constructor(private router:Router) { }
  goToUpdatePage(UpdatePage:string, id:number):void{
    this.router.navigate([`${UpdatePage}/${id}`]);
  }

  ngOnInit() {}

}
