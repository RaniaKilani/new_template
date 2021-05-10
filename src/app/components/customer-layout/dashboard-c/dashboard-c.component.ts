import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-c',
  templateUrl: './dashboard-c.component.html',
  styleUrls: ['./dashboard-c.component.scss'],
})
export class DashboardCComponent implements OnInit {

  constructor( private router:Router) { }
  goToAddPage( AddPage:string){
    this.router.navigate([`${AddPage}`]);}


  ngOnInit() {}

}
