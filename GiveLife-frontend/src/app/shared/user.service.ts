import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { User } from './user.model';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ NgForm, FormControl, FormGroup, Validators }from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser : User = {
    name:'',
    NID:undefined,
    visa:undefined,
    region:[],
    password:'',
  }
  constructor() { }
}
