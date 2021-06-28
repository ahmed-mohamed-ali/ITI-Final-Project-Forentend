import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms'

import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms"; 
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  subscriber
  post={
    PostMessage:"",
    RequiredAmount:"",
    NeedCatogry:"",
    CaseNationalId:""
  }

  ngOnInit(): void {
  }
  closeResult = '';
  
  constructor(private modalService: NgbModal, public jwtservice:JwtService) {}
  
  opencupon(cupon) {
    this.modalService.open(cupon,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = 
         `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  openpostform(postform) {
    this.modalService.open(postform,
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
    console.log(this.post);

    this.subscriber=this.jwtservice.publishPost(this.post).subscribe(res =>{

      let response:any=res;
      if(response.success){
        console.log(response);
        window.location.reload();
        
      }
    
    },err=>{
      alert(err.error);
      console.log(err.error)
      console.log(err.status)
      console.log(err.statusText)
      console.log(err.message)
    })
    
  }

 
}
