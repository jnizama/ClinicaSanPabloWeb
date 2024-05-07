import { Component } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-appointment-historia',
  templateUrl: './appointment-historia.component.html',
  styleUrls: ['./appointment-historia.component.css']
})

export class AppointmentHistoriaComponent {

  constructor(private readonly ps: HistoryService){}

  lista : any = []

  public historial: any[] = []

      
  historial_be(){

      this.ps.__appointment_history_api ().subscribe((rest:any) => {
      this.historial = rest.data
    })

  }



ngOnInit(): void {
  
  this.historial_be()

}


}

