import { Component } from '@angular/core';
import { first } from 'rxjs';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-appointment-resume',
  templateUrl: './appointment-resume.component.html',
  styleUrls: ['./appointment-resume.component.css']
})
export class AppointmentResumeComponent {
  constructor(private readonly pa: ResumeService) {}
  ResumenCita : any = []

  public resumen: any[] = []
  ngOnInit(): void {
    this.pa.loadDataResumen(1).pipe(first()).subscribe(data =>
      {
        if(data! = null)
          {
            console.log(data);
            this.ResumenCita = data;
          }
      }
      ,error => {
      console.log("credenciales erradas test");
    });
  }
}
