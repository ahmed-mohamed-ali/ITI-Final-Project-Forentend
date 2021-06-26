import { Component, OnInit } from '@angular/core';

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

  regions=['Alexandria','Portsaid','Cairo','Ismailia','Suez']
  subscriber
  
  constructor(public userService: UserService,public jwtservice:JwtService , private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
   
    console.log(form.value);

    this.jwtservice.Register(form.value).subscribe(res=>{
      let response:any=res;
      console.log(response);
      if(response.success){
        alert(response.message);
        console.log(response.message)
      }
    
    },err=>{
      
      alert(err.error);
      console.log(err.error)
      console.log(err.status)
      console.log(err.statusText)
      console.log(err.message)
    }
    )
   
  }
}
