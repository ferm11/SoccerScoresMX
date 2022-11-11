import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  misVideos:any[]=[];
  videoId:string;

  constructor( private _youtube : YoutubeService ) {
    this._youtube.obtenerVideos().subscribe((resp:any)=>{
      this.misVideos = resp.items;
      console.log(this.misVideos);
    });
  }

  ngOnInit(): void {
  }

  detalleVideo(a:string){
    console.log(a);
    
   this.videoId=a;
   $('#exampleModal').modal();
    
  }

  cerrarModal(){
    this.videoId = "";
    $('#exampleModal').modal('hide');
  }

  getStreaming(){
    this._youtube.obtenerVideos().subscribe((resp:any)=>{
      console.log(resp)
      this.misVideos = resp.items;
    })
  }

}