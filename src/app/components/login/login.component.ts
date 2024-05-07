import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm : FormGroup  = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
    
  });
  login : any = []


  constructor(private formBuilder: FormBuilder, private router: Router,
              private readonly pa: LoginService) {

    // this.loginForm = this.formBuilder.group({
    //               username: ['', Validators.required],
    //               password: ['', Validators.required]   
    // });
  }

  ngOnInit(): void { 
    this.loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40)
      ]
    ]})
   }
            
  

__on_login() {
  
  
    this.pa.login(this.loginForm.controls.username.value,
                  this.loginForm.controls.password.value,
    ).pipe(first()).subscribe(data => 
    {
      
      if(data != null)
        var totalQtyCitas = data.data.totalCitasPendiente;      
        this.router.navigate(['home',  { totalCitas: totalQtyCitas }]);
    }
    ,error => {
    console.log("credenciales erradas")
});
    
    //this.login = rest.data
    //console.log(this.login)
    
}

    
}
