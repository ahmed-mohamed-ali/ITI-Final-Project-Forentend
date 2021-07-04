import { Component, OnInit } from '@angular/core';
import {ErrorHandlerService} from 'src/app/service/error-handler.service'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms'

import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";

import { UserService } from '../../shared/user.service'
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public errorMessage: string = '';
  subscriber:any
  notexist:boolean;
  constructor(public userService: UserService,public jwtservice:JwtService,private router: Router,private errorHandler: ErrorHandlerService) {
    this.notexist=false
   }

  ngOnInit(): void {
    this.userService.selectedUser.NID=""
    this.userService.selectedUser.password=""
  }

  onSubmit(form: NgForm) {
    this.notexist=false
    console.log(form.value);
    this.subscriber=this.jwtservice.login(form.value).subscribe(res =>{

      let response:any=res;
      console.log(response);
      if(response.success){
    
        localStorage.setItem('access_token', `Bearer ${response.token}`);
        this.router?.navigate(['/profile']);
      }
    
    },err=>{
      if(err.status==404){
        this.notexist=true;
        console.log(this.notexist);
        return;
      }
      this.errorHandler.handleError(err);
        this.errorMessage = this.errorHandler.errorMessage;
      console.log(err)
      console.log(err.status)
      console.log(err.statusText)
      console.log(err.message)
    })
  }
  

}
