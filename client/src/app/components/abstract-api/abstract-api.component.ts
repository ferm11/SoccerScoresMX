import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../maps/services.service';


@Component({
  selector: 'app-abstract-api',
  templateUrl: './abstract-api.component.html',
  styleUrls: ['./abstract-api.component.css']
})

export class AbstractApiComponent implements OnInit {
  // Variables
  lat : number;
  lng : number;
  country : string;
  city : string;
  continent : string;
  region : string;
  cp : string;
  security : boolean;
  ip : string;
  time : string;
  flag : string;
  isp : string;


  constructor(private servicesService: ServicesService, private http: HttpClient) { }

  ngOnInit() {

    this.servicesService.getLocation().subscribe(data => {
        console.log(data);
        this.lat = data.latitude;
        this.lng = data.longitude;
        this.country = data.country;
        this.city = data.city;
        this.region = data.region;
        this.continent = data.continent;
        this.cp = data.postal_code;
        this.ip = data.ip_address;
        this.security = data.security.is_vpn;
        this.time = data.timezone.current_time;
        this.flag = data.flag.png;
        this.isp = data.connection.isp_name;
    });

  }

}