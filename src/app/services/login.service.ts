import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //constructor() { }
  constructor(private readonly http: HttpClient) { }


  login(username : String, password : String) {
    
    //let urlRequest = "http://52.15.45.55:88/api/User/GetValidUser?username=" + username + "&Contrasena=" + password
    let urlRequest = "https://localhost:44309/api/User/GetValidUser?username=" + username + "&Contrasena=" + password
    return this.http.post<any>(urlRequest, {})
    .pipe(map(user => {      
      if(!user.isSuccess)
        {
          
          user.messageError = "Credenciales del cliente no son válidas o no tiene contratos activos."      
          return null;
        }
      else
      return user;
    }));
  }
}
