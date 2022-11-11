import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(`${this.API_URI}/users`);
  }

  getUser(id : string) {
    return this.http.get(`${this.API_URI}/users/${id}`);
  }

  saveUser(user : User){
    return this.http.post(`${this.API_URI}/users`, user);
  }

  deleteUser(id : string){
    return this.http.delete(`${this.API_URI}/user/${id}`);
  }

  validateUser(username : String | undefined, pass : String | undefined) {
    return this.http.get(`${this.API_URI}/users/${username},${pass}`);
  }
}