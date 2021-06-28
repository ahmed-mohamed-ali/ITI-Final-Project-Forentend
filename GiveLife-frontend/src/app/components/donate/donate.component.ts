//import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/service/jwt.service';
import {  BsModalRef } from "ngx-bootstrap/modal";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostComponent } from 'src/app/components/post/post.component';
import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  public bsModalRef: BsModalRef
    subscriber
    postsArray : any
    constructor(public jwtservice:JwtService) { }
    @Output('reg') myEvent = new EventEmitter();
  donateToPost(postId,amountg){
    
    this.subscriber=this.jwtservice.donatePost(postId,amountg).subscribe(res =>{
  
      let response:any=res;
      if(response.success){
        console.log(response);
    
      }
    
    },err=>{
      alert(err.message);
      console.log(err)
      console.log(err.status)
      console.log(err.statusText)
      console.log(err.message)
    })
    this.bsModalRef.hide()
   }
  ngOnInit(): void {
    
  }
 
  myForm= new FormGroup({
    money: new FormControl([Validators.min(0),
                              Validators.required])
  })
  close() {
    if(this.myForm.valid){
     
    this.bsModalRef.hide()
    }
  }
}
