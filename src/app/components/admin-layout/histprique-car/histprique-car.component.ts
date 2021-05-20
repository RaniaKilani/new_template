import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car-list/car.service';
import { Historique } from '../models/historique';


@Component({
  selector: 'app-histprique-car',
  templateUrl: './histprique-car.component.html',
  styleUrls: ['./histprique-car.component.scss'],
})
export class HistpriqueCarComponent implements OnInit {
  list:Historique[];
  currentHisto = new Historique();
  constructor(private carService:CarService,
    private router:Router,
    private activatedRoute:ActivatedRoute) {
    this.carService.consulterHistorique(this.activatedRoute.snapshot.params.id).
    subscribe( hs =>{ 
      this.list  = hs; 
     
     console.log(hs) });
    console.log(this.activatedRoute.snapshot.params.id);
   }

  ngOnInit() {
    // this.carService.listeHisto().subscribe(hss => {
    //   this.list = hss;
    //   for(let l of this.list){
    //     console.log(l)}
    // });

  }

}
