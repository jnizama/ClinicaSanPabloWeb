
import { Component } from '@angular/core';

@Component({  
  selector: 'app-appointment-time',
  templateUrl: './appointment-time.component.html',  
  styleUrls: ['./appointment-time.component.css']
})

export class AppointmentTimeComponent {

  public hours1: any[] = [
    { "id": 0, "name": "08:00" },
    { "id": 1, "name": "09:00" },
    { "id": 2, "name": "10:00" },
    { "id": 3, "name": "11:00" },
    { "id": 4, "name": "12:00" },
    { "id": 4, "name": "13:00" }    
];


public hours2: any[] = [
  { "id": 0, "name": "14:00" },
  { "id": 1, "name": "15:00" },
  { "id": 2, "name": "16:00" },
  { "id": 3, "name": "17:00" },
  { "id": 4, "name": "18:00" },
  { "id": 4, "name": "19:00" }    
];

  ngOnInit(): void {
    
  }
}

class Hour{
  idBank:number;
  name:string;
  constructor(idBank: number,name:string){
    this.idBank = idBank;
    this.name = name;
  }
}