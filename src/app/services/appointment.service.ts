import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  
  constructor(private readonly http: HttpClient) { }

  loadHistory(idUser : Number) {
    
    let urlRequest = "http://52.15.45.55:88/api/Appointment/history?user=1"
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
