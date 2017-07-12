import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage= "";
  loginForm: FormGroup
  api_url= "http://111.93.82.91:3000/auth/signup"
  constructor(
    private fb: FormBuilder,
    private http: Http,
  ) {
     this.loginForm = this.fb.group({
        email: ['admin@gmail.com',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
       password: ['FGFGddfd5454$4',[Validators.required,Validators.pattern('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$')]],
     })
  }

  // /auth/signup
  loginUser(){
    console.log(this.loginForm.value)    
    if(this.loginForm.controls['email'].hasError('required')){
      this.errorMessage= "Emai required!"
    } else if(this.loginForm.controls['email'].hasError('pattern')){
      this.errorMessage= "Enter valid Email!"
    } else if(this.loginForm.controls['password'].hasError('required')){
      this.errorMessage= "Password required!"
    } else if(this.loginForm.controls['password'].hasError('pattern')){
      this.errorMessage= "Password contain At-least 1 Capital, At-least 1 number, At-least 1 special char !"
    } else {
      this.errorMessage = "";
      console.log(this.loginService())
    }
  }

  loginService(){
    let headers = new Headers();
     return this.http.post(this.api_url,{
        headers : headers
    }).map(res => console.log("Response came!!!"))
  }
  ngOnInit() {
  }

}
