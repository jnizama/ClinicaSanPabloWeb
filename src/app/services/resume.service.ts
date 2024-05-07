import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private readonly http: HttpClient) { }

  loadDataResumen (idUser : Number) {

    let urlRequest = "http://52.15.45.55:88/api/Appointment/MyAppointment?appointmentId=1"
    return this.http.get<any> (urlRequest, {})
    .pipe(map(appointment => {

      if(appointment == null)
        {
          appointment.messageError = "No hay datos"
          return null;
        } else {
          return appointment;
        }
    }));
  }
}
