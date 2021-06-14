import { Component, OnInit } from '@angular/core';
import { GeolocationComponent } from '../../driver-layout/geolocation/geolocation.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import{Map,tileLayer,marker,polyline,Icon, icon}from "leaflet";
import * as L from 'leaflet'

@Component({
  selector: 'app-geolocation-s',
  templateUrl: './geolocation-s.component.html',
  styleUrls: ['./geolocation-s.component.scss'],
})
export class GeolocationSComponent implements OnInit {
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
    const zoomLevel = 12;
      this.map = L.map('map',{center:[parcThabor.lat, parcThabor.lng],zoom: zoomLevel});
      // tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
        const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 12,
      maxZoom: 17,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    tileLayer.addTo(this.map);
    this.addMarker(parcThabor);

  }

  ionViewDidEnter(){
    this.showMap();
  }

  addMarker(coords) {
    const marker = L.marker([coords.lat, coords.lng], { icon: this.smallIcon });
    marker.addTo(this.map);}


  ngOnInit() {

  }


}
