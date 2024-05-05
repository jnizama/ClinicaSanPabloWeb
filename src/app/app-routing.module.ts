import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutStandardComponent } from './components/layout/layout-standard/layout-standard.component';
import { HomeComponent } from './components/home/home.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AppointmentResumeComponent } from './components/appointment-resume/appointment-resume.component';
import { MyAppointmentsComponent } from './components/my-appointments/my-appointments.component';
import { AppointmentTimeComponent } from './components/appointment-time/appointment-time.component';

const routes: Routes = [
  {
    path: '', component: LayoutStandardComponent, 
    children: [      
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
    ]
  },
  {
    path: '', component: LayoutStandardComponent,  
    children: [
      //{ path: 'test/:id', component: AboutComponent }
      { path: 'home', component: HomeComponent, pathMatch: 'full'},
      { path: 'appointment', component: AppointmentComponent, pathMatch: 'full'},
      { path: 'appointment-resume', component: AppointmentResumeComponent, pathMatch: 'full'},
      { path: 'my-appointment', component: MyAppointmentsComponent, pathMatch: 'full'},
      { path: 'appointment-time', component: AppointmentTimeComponent, pathMatch: 'full'}
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
