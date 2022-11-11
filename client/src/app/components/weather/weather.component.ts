import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather : any;

  constructor(private weatherService: WeatherService) {

   }

  ngOnInit(){
    
  }

  getWeather(cityName:string, countryCode:string){
    this.weatherService.getWeather(cityName, countryCode)
    .subscribe(
      res => {
        console.log(res);
        this.weather = res
      },
      err => console.log(err)
    )
  }

 submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement){

  if(cityName.value && countryCode.value){

    this.getWeather(cityName.value, countryCode.value);

    cityName.value='';
    countryCode.value='';

  }else{
    alert('Valores no aceptados')
  }

  cityName.focus();
  return false;

 }

}
