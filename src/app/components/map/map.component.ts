import { Component, OnInit} from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  constructor() {}
  ngOnInit () {
    const loader = new Loader({apiKey: 'AIzaSyCR9fJAEVeI0wS5HYGe_nfa7Td0CChxhuY'}).load().then(initMap);
    initMap();
  }
}

let map: google.maps.Map;
async function initMap(): Promise<void> {
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}