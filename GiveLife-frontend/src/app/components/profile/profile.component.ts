import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms'

import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { JwtService } from 'src/app/service/jwt.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  subscriber
  coordinatorPost
  constructor(public jwtservice:JwtService){

  }
  ngOnInit(): void {
    this.subscriber=this.jwtservice.getProfile().subscribe(res =>{

      let response:any=res;
      if(response.success){
        console.log(response);
        this.coordinatorPost=response.coordinator.post
        console.log(this.coordinatorPost)
    
      }
    
    },err=>{
      console.log(err)
      console.log(err.status)
      console.log(err.statusText)
      console.log(err.message)
    })
  }
  PostsClick= function () {
    this.router.navigate('/posts');
  };

  CuponsClick= function () {
    this.router.navigate('/cupons');
  };

  LogoutClick= function () {
    this.router.navigate('/home');
  };
  
}
