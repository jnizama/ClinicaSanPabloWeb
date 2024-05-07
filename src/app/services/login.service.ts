import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //constructor() { }
  constructor(private readonly http: HttpClient) { }


  valida_user() {
    return this.http.get('http://52.15.45.55:88/api/User/GetValidUser')
  }
}
