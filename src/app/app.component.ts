import { Component } from '@angular/core';
import {GoogleMapsAPIWrapper, LatLngBounds} from '@agm/core';

@Component({
  selector: 'app-root',
  template: `
    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="15">
      <agm-marker
        [latitude]="lat"
        [longitude]="lng"
        [title]="title"
        [openInfoWindow]="true"
        [iconUrl]="iconUrl"
        [opacity]="0.5"
        (boundsChange)="getBounsd($event)"
      ></agm-marker>
    </agm-map>

    <button (click)="getBounds()">Get Bounds</button>
    {{bounds | json}}
  `,
  styles: [
    `
      agm-map {
        height: 500px;
      }
      agm-marker {
        height: 200px;
      }
    `
  ]
})
export class AppComponent {
  title = 'たんぽぽ';
  label = 'とんこつラーメン、麻婆ラーメン';
  iconUrl = '../assets/nekodesu.png';
  lat = 31.550553;
  lng = 130.556267;

  bounds;

  constructor(private mapApi: GoogleMapsAPIWrapper) {}

  getBounds(event) {
    this.bounds = event;
  }
}
