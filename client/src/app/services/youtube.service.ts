import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private url : string = "https://www.googleapis.com/youtube/v3";
  private apikey : string = "AIzaSyDbUeD-xflXFiFKo0eVVLfFf59u2WlqPc0";
  private canalId : string = "UCq8BPLXtFeiSFOvmJrknWGg";

  constructor( private _http : HttpClient ) { }

  obtenerVideos(){
    const parametros = new HttpParams().set('part', 'snippet').set('channelId', this.canalId).set('maxResults', '5').set('order','date').set('key', this.apikey);
    let url = `${this.url}/search`;
    return this._http.get(url,{params:parametros}).pipe(map(resp => resp));
  }

}