import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MyAppointmentsComponent } from './components/my-appointments/my-appointments.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AppointmentResumeComponent } from './components/appointment-resume/appointment-resume.component';
import { LayoutStandardComponent } from './components/layout/layout-standard/layout-standard.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AppointmentComponent,
    AppointmentResumeComponent,
    AppointmentComponent,
    MyAppointmentsComponent,
    AppointmentComponent,
    LayoutStandardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
