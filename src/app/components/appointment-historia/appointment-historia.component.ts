import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-historia',
  templateUrl: './appointment-historia.component.html',
  styleUrls: ['./appointment-historia.component.css']
})
export class AppointmentHistoriaComponent {


  public historial: any[] = [
    { "reg": 0, "sede": "Surco" , "especialidad": "Cardiologia", "fechahora":"06/04/2024 14:00" ,"medico":"Dr. Ernesto Montoya Suárez","consultorio":"201"},
    { "reg": 1, "sede": "Surco" , "especialidad": "Medicina General", "fechahora":"06/04/2024 09:00" ,"medico":"Dr. Ernesto Montoya Suárez","consultorio":"205"},
    { "reg": 2, "sede": "Surco" , "especialidad": "Nutricion", "fechahora":"06/04/2024 09:30" ,"medico":"Dr. Ernesto Montoya Suárez","consultorio":"203"},
    { "reg": 3, "sede": "Surco" , "especialidad": "Neomoligia", "fechahora":"06/04/2024 15:00" ,"medico":"Dr. Ernesto Montoya Suárez","consultorio":"208"},
    { "reg": 4, "sede": "Surco" , "especialidad": "Trautomologia", "fechahora":"06/04/2024 08:30" ,"medico":"Dr. Ernesto Montoya Suárez","consultorio":"301"},
    { "reg": 5, "sede": "Surco" , "especialidad": "oculista", "fechahora":"06/04/2024 16:30" ,"medico":"Dr. Ernesto Montoya Suárez","consultorio":"202"},
];

ngOnInit(): void {
    
}


}

