import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../../services/scores.service';

@Component({
  selector: 'app-scores-list',
  templateUrl: './scores-list.component.html',
  styleUrls: ['./scores-list.component.css']
})
export class ScoresListComponent implements OnInit {

  usuarios : any = [];

  constructor(private scoresService : ScoresService) { }

  ngOnInit(): void {
    this.scoresService.getUsuarios().subscribe(
        resp => {
          this.usuarios = resp;
        },
        err => console.error(err)
    );
  }
}