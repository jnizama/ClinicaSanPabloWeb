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
import { CommonModule } from '@angular/common';
import { AppointmentTimeComponent } from './components/appointment-time/appointment-time.component';
import { AppointmentCompletedComponent } from './components/appointment-completed/appointment-completed.component';
import { AppointmentHistoriaComponent } from './components/appointment-historia/appointment-historia.component';
import { AppointmentPaymentConfirmComponent } from './components/appointment-payment-confirm/appointment-payment-confirm.component';
import { AppointmentPaymentCardComponent } from './components/appointment-payment-card/appointment-payment-card.component';



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
    AppointmentTimeComponent,
    LayoutStandardComponent,
    AppointmentCompletedComponent,   
    AppointmentHistoriaComponent,
    AppointmentPaymentConfirmComponent,
    AppointmentPaymentCardComponent, 
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
