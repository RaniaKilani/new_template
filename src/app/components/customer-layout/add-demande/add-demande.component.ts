import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-demande',
  templateUrl: './add-demande.component.html',
  styleUrls: ['./add-demande.component.scss'],
})
export class AddDemandeComponent implements OnInit {

  constructor(private router:Router) { }
  goToListPage(ListPage:string):void{
    this.router.navigate([`${ListPage}`]);}

  ngOnInit() {}

}
