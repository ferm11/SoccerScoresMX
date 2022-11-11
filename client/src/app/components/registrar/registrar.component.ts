import { Component, HostBinding, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { ScoresService } from 'src/app/services/scores.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  @HostBinding('class') classes = 'rows';

  user : User = {
    userId : 0,
    mail : '',
    username : '',
    pass : ''
  };

  constructor(private scoresService: ScoresService) { }

  ngOnInit(): void {
  }

  saveNewUser(){
    console.log(this.user);
    delete this.user.userId;
    this.scoresService.saveUser(this.user).subscribe(
      resp=>{
        console.log(resp);
      },
      err => console.error(err)
    )
  }

}
