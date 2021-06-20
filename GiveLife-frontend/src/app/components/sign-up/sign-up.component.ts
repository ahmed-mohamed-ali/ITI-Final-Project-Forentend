import { Component, OnInit } from '@angular/core';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms'

import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";

import { UserService } from '../../shared/user.service'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  regions=['Alexandria','Portsaid','Cairo','Ismailia','Suez']

  
  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
