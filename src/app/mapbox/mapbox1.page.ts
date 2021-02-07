import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'mapbox1',
  templateUrl: 'mapbox1.page.html',
})
export class Mapbox1Page {
  map: any;

  constructor() {
  }

  addMarkerDisabled() {
    return !this.map;
  }

  requestMap() {    
    mapboxgl.accessToken = environment.MAPBOX_TOKEN;
    const container = document.getElementById('map')
    if(container) {
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-93.2656, 44.9752], // [lng, lat]
        zoom: 12 
      });
    }
  }

  addMplsMarker() {
    if (this.map) {
      const marker = new mapboxgl.Marker()
      .setLngLat([-93.2656, 44.9752])
      .addTo(this.map)
    }
  }
}
