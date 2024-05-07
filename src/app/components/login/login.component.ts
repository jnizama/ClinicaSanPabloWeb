import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private router: Router,
              //  private fb:FormBuilder,
              private readonly pa: LoginService) {}

  
  // loginForm = this.fb.group({
  //   email: ['', Validators.required],
  //   password: ['',Validators.required]
  // })

login : any = []

__on_login() {
//  debugger;
  this.pa.valida_user().subscribe((rest: any) => {
    debugger;
    this.login = rest.data
    console.log(this.login)
    

  })
  }

  // ngOnInit() {
  //   this.__on_login()
  // }
}




  // ngOnInit(){
    
  // }
  // onClick_Valid_User(){
    
  //   //if(true){
  //     this.router.navigate(['home']);
  //   //}
  // }

