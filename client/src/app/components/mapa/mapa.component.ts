import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  mapa!: Mapboxgl.Map;

  constructor() { }

  ngOnInit(){

    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
    container: 'mapa-mapbox',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-100.93044342818119, 21.16794452541997], // longitud, latitud
    zoom: 14.3 // zoom
    });

    this.crearMarcador(-100.93044342818119, 21.16794452541997);

  }

  crearMarcador(lng: number, lat: number){
    const marker = new Mapboxgl.Marker({
      draggable: true
    }).setLngLat([lng,lat])
      .addTo(this.mapa);
      marker.on('drag', () => {
      console.log(marker.getLngLat())
    })
}

}
