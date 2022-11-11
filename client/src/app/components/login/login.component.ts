import { Component, OnInit, HostBinding } from '@angular/core';
import { ScoresService } from 'src/app/services/scores.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  title = "auth0";

  constructor(public auth : AuthService) { }

  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout();
  }

}