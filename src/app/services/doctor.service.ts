import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  
  constructor(private readonly http: HttpClient) { }

  loadDataDoctor(idUser : Number) {
    
    let urlRequest = "http://52.15.45.55:88/api/Doctor/list"
    return this.http.get<any>(urlRequest, {})
    .pipe(map(appointment => {   
       
      if(appointment == null)
        {
          appointment.messageError = "No data"
          return null;
        }
      else      
        return appointment;
    }));
  }
}
