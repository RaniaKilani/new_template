import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import{Map,tileLayer,marker,polyline,Icon, icon}from "leaflet";
import * as L from 'leaflet'

@Component({
  selector: 'app-geolocation-cars',
  templateUrl: './geoloc-cars.component.html',
  styleUrls: ['./geoloc-cars.component.scss'],
})
export class GeolocCarsComponent implements OnInit {
  map:Map;

  latLong= [];
  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]
  });
  constructor(  private geolocation: Geolocation) { }



  showMap() {
    const parcThabor = {
      lat: 36.86012,
      lng: 10.19337,
    };
    const parcThabor1 = {
      lat: 36.8948,
      lng: 10.2011,
    };
    const zoomLevel = 12;
      this.map = L.map('map',{center:[parcThabor.lat, parcThabor.lng],zoom: zoomLevel});
      // tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
        const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 12,
      maxZoom: 17,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    tileLayer.addTo(this.map);
    const matricule = `148TU2015`;
    const matricule1 = `149TU2015`;
    this.addMarker(parcThabor, matricule);
    this.addMarker(parcThabor1, matricule1);




  }

  ionViewDidEnter(){
    this.showMap();
  }

  addMarker(coords, text) {
    const marker = L.marker([coords.lat, coords.lng], { icon: this.smallIcon });
    marker.addTo(this.map);
    marker.addTo(this.map).bindPopup(text).openPopup();
  }


  ngOnInit() {

  }


}
