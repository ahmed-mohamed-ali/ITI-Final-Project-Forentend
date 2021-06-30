import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/service/jwt.service';
import { HttpHeaders } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router,private JwtService:JwtService,private modalService: NgbModal) { }

  ngOnInit(): void {
  }

///////////////////////////////////////////routing services///////////////////////////////////


  SignInClick= function () {
    this.router?.navigate('/signin');
};


LogoutClick= function () {
  this.JwtService.logout()
  
};

SignUpClick= function () {
  this.router?.navigate('/signup');
};

HomeClick= function () {
  this.router?.navigate('/home');
};

ProfileClick= function () {
  this.router?.navigate('/profile');

};

PostsClick= function () {
  
  this.router?.navigate('/posts');

};

isLogin(){
  return this.JwtService.loggedIn
}

////////////////////////////////Donate Pop Up/////////////////////////////////////////////

closeResult = '';

opendonateform(donateform) {
  this.modalService.open(donateform,
 {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = 
       `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}
onSubmit(form: NgForm) {
  console.log(form);
}

}
