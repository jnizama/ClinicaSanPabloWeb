import { Component } from '@angular/core';
import { first } from 'rxjs';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  constructor(private readonly pa: DoctorService){}
  listaDoctores : any = []

  public historial: any[] = []
  ngOnInit(): void {
    this.pa.loadDataDoctor(1).pipe(first()).subscribe(data => 
      {    
        if(data != null)
        {
          console.log(data);
          this.listaDoctores = data;
        } 
      }
      ,error => {
      console.log("credenciales erradas");
    });
        
  }
  
}
