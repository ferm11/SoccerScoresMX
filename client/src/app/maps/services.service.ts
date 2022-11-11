import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface LocationInfo{
  ip_address: string
  city: string
  region: string
  postal_code: string
  country: string
  continent: string
  longitude: number
  latitude: number
  security: {
    is_vpn: false
  }
  timezone: {
    name: string,
    current_time: string,
  }
  flag: {
    png: string
  }
  currency: {
    currency_name: string
  }
  connection: {
    autonomous_system_organization: string
    connection_type: string
    isp_name: string
  }
}

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  public useLocation? : [number, number] | undefined;

  constructor(private http: HttpClient) { }

  getLocation(){
    return this.http.get<LocationInfo>('https://ipgeolocation.abstractapi.com/v1/?api_key=9400e445f4274b54a17c02b838520663');
  }
}