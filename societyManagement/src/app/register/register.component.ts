import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  blockList= ['A','B','C','D','E','F']
  flatList= ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']
  registerForm: FormGroup
  errorMessage = ""
  constructor(
    private fb: FormBuilder
  ) { 
     this.registerForm = this.fb.group({
       fname: ['dfdgfgdgh',[Validators.required,Validators.pattern('^[A-Za-z]{0,50}$')]],
       lname: ['dfgdfgg',[Validators.required,Validators.pattern('^[A-Za-z]{0,50}$')]],
       email: ['admin@gmail.com',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
       password: ['FGFGddfd5454$4',[Validators.required,Validators.pattern('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$')]],
       cpassword: ['FGFGddfd5454$4',[Validators.required]],
       bdate: ['',[Validators.required]],
       fdate: ['',[Validators.required]],
       acondition: ['',[Validators.required]],
       block: ['',[Validators.required]],
       fnumber: ['',[Validators.required]],
       mnumber: ['',[Validators.required,Validators.pattern('^[0-9]{10,12}$')]],
     })
  }

  registerUser(){
    console.log(this.registerForm);
    if(this.registerForm.controls['fname'].hasError('required')){
      this.errorMessage = "First Name is required!"
    } else if(this.registerForm.controls['fname'].hasError('pattern')){
      this.errorMessage= "First Name must be alfabet and max 50 chars!"
    } else  if(this.registerForm.controls['lname'].hasError('required')){
      this.errorMessage = "Last Name is required!"
    } else if(this.registerForm.controls['lname'].hasError('pattern')){
      this.errorMessage= "Last Name must be alfabet and max 50 chars!"
    } else if(this.registerForm.controls['email'].hasError('required')){
      this.errorMessage= "Emai required!"
    } else if(this.registerForm.controls['email'].hasError('pattern')){
      this.errorMessage= "Enter valid Email!"
    } else if(this.registerForm.controls['password'].hasError('required')){
      this.errorMessage= "Password required!"
    } else if(this.registerForm.controls['password'].hasError('pattern')){
      this.errorMessage= "Password contain At-least 1 Capital, At-least 1 number, At-least 1 special char !"
    } else if(this.registerForm.controls['cpassword'].hasError('required')){
      this.errorMessage= " conform Password required!"
    } else if(this.registerForm.value.password != this.registerForm.value.cpassword){
      this.errorMessage= "Password not match with conform password!"
    } else if(this.registerForm.controls['bdate'].hasError('required')){
      this.errorMessage= "Enter Birth Date!"
    } else if(this.registerForm.controls['fdate'].hasError('required')){
      this.errorMessage= "Enter Flate puchase date!"
    } else if(!this.registerForm.value.acondition){
      this.errorMessage= "Select term and condition!"
    } else if(this.registerForm.controls['block'].hasError('required')){
      this.errorMessage= "Select falte block!"
    } else if(this.registerForm.controls['fnumber'].hasError('required')){
      this.errorMessage= "select flate number!"
    } else if(this.registerForm.controls['mnumber'].hasError('required')){
      this.errorMessage= "Enter Mobile numner!"
    } else if(this.registerForm.controls['mnumber'].hasError('pattern')){
      this.errorMessage= "Enter valid mobile number!"
    } else {
      this.errorMessage = ""
    }
  }

  ngOnInit() {
  }

}
