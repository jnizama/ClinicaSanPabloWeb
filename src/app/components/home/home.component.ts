import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',    
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public totalCitas = 0;

  constructor(private route:ActivatedRoute) {
    
  }
  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.totalCitas = params['totalCitas'];
      console.log(this.totalCitas)
    });
  }
}
