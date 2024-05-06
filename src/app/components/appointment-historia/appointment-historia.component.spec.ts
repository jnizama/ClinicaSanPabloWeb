import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentHistoriaComponent } from './appointment-historia.component';

describe('AppointmentHistoriaComponent', () => {
  let component: AppointmentHistoriaComponent;
  let fixture: ComponentFixture<AppointmentHistoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentHistoriaComponent]
    });
    fixture = TestBed.createComponent(AppointmentHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
