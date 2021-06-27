import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms'

import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  ngOnInit(): void {
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
