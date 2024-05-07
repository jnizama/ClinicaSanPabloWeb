import { Component } from '@angular/core';
import { first } from 'rxjs';
import { AppointmentService } from 'src/app/services/appointment.service';


@Component({
  selector: 'app-appointment-historia',
  templateUrl: './appointment-historia.component.html',
  styleUrls: ['./appointment-historia.component.css']
})

export class AppointmentHistoriaComponent {

  constructor(private readonly pa: AppointmentService){}

  lista : any = []

  public historial: any[] = []


ngOnInit(): void {
  this.pa.loadHistory(1).pipe(first()).subscribe(data => 
    {    
      if(data != null)
      {
        console.log(data);
        debugger;
      } 
      
      //this.router.navigate(['home',  { totalCitas: totalQtyCitas }]);
    }
    ,error => {
    console.log("credenciales erradas");
  });
      
}

}