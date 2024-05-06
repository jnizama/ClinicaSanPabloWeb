import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //constructor() { }
  constructor(private readonly http: HttpClient) { }


  valida_user() {
    return this.http.get('https://jebf1j7mua.execute-api.us-east-1.amazonaws.com/listar')
  }
}
