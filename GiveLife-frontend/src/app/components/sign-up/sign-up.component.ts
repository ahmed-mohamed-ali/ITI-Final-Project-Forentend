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
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public errorMessage: string = '';
  regions=['Alexandria','Portsaid','Cairo','Ismailia','Suez']
  subscriber
  conflictError={
    flag:false,
    message:""
  }
  registerSucceed=false;
  constructor(public userService: UserService,public jwtservice:JwtService , private router: Router,private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.userService.selectedUser.NID=""
    this.userService.selectedUser.password=""
    this.userService.selectedUser.visa=""
    this.userService.selectedUser.name=""
    this.conflictError.flag=false
    this.registerSucceed=false;
  }

  onSubmit(form: NgForm) {
   
    console.log(form.value);

    this.jwtservice.Register(form.value).subscribe(res=>{
      let response:any=res;
      console.log(response);
      if(response.success){
        this.conflictError.flag=false
        this.registerSucceed=true;
        // alert(response.message);
        // console.log(response.message)
        this.router?.navigate(['/']);
      }
    
    },err=>{
      if(err.status==409){
        this.conflictError.flag=true;
        this.conflictError.message=err.error
      }else{
        this.errorHandler.handleError(err);
        this.errorMessage = this.errorHandler.errorMessage;
      }
      // alert(err.error);
      // console.log(err.error)
      // console.log(err.status)
      // console.log(err.statusText)
      // console.log(err.message)
    }
    )
   
  }
}
