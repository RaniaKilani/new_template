import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import{Map,tileLayer,marker,polyline}from "leaflet";
import * as L from 'leaflet'


@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss'],
})
export class GeolocationComponent implements OnInit {
  map:Map;
  marker:any;
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
  constructor(
    private geolocation: Geolocation
  ) { }
  showMap() {
  const parcThabor = {
    lat: 48.114384,
    lng: -1.669494,
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

}

ionViewDidEnter(){
  this.showMap();
}

showMarker(latLong) {
  this.marker = marker(latLong, 15);
  this.marker.addTo(this.map)
  .bindPopup('Hey, I\'m Here');
  this.map.setView(latLong);
}

getPositions() {
  this.geolocation.getCurrentPosition({
    enableHighAccuracy: true
  }).then((res) => {
    return this.latLong = [
      res.coords.latitude,
      res.coords.longitude
    ]
  }).then((latlng) => {
    if (this.marker) {
      this.marker.remove();
      this.showMarker(latlng);
    } else {
      this.showMarker(latlng);
    };
  });
}
ngOnInit() {}}
