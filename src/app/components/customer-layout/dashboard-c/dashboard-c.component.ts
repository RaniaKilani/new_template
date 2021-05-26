import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from '../models/reservation';
import { ReservationService } from './reservation.service';

@Component({
  selector: 'app-dashboard-c',
  templateUrl: './dashboard-c.component.html',
  styleUrls: ['./dashboard-c.component.scss'],
})
export class DashboardCComponent implements OnInit {
  list: Reservation[];
  constructor(
     private router:Router,
     private resService:ReservationService) { }
  goToAddPage( AddPage:string){
    this.router.navigate([`${AddPage}`]);}


  ngOnInit() {
    this.resService.listReservation().subscribe(res => {
      this.list = res;
      console.log(res)

      });
  }

}
