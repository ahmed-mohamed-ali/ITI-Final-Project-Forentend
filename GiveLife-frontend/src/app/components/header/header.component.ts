import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router,private JwtService:JwtService) { }

  ngOnInit(): void {
  }

  SignInClick= function () {
    this.router.navigate('/signin');
};

LogoutClick= function () {
  this.JwtService.logout()
  this.router.navigate('/home');
};

SignUpClick= function () {
  this.router.navigate('/signup');
};

isLogin(){
  return this.JwtService.loggedIn
}
}
