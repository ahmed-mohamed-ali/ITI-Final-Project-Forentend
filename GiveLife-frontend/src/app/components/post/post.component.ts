//import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/service/jwt.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms'

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DonateComponent } from 'src/app/components/donate/donate.component';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  subscriber
  postsArray : any
  closeResult = '';
  PostId:any
   donnation={
    Amount:""
  }
  customError={flag:false,serverError:""}
  DonnateForm
  arrays: any[];
  arrays1: any[];
  categories :any
  constructor(public jwtservice:JwtService,public modalService: NgbModal) { }

  donateToPost(amount,x:NgForm){
    console.log(this.PostId,amount);
    this.subscriber=this.jwtservice.donatePost(this.PostId,amount).subscribe(res =>{

      let response:any=res;
      if(response.success){
        console.log(response);
        this.customError.flag=false
        this.modalReference.close();
        
      
          }
    
    },err=>{
      this.customError.flag=true
      this.customError.serverError=err.error
    //  alert(err.error);
   
  })
  }
  ngOnInit(): void {
    this.subscriber=this.jwtservice.getRegionPost().subscribe(res =>{

      let response:any=res;
      if(response.success){
        this.postsArray=response.post;
        console.log(response.post);
        this.arrays1=response.post;
        this.arrays=response.post;
    
      }
    
    },err=>{
      alert(err.message);
      // console.log(err)
      // console.log(err.status)
      // console.log(err.statusText)
      // console.log(err.message)
    })

     this.jwtservice.getOrganization().subscribe(res =>{
      let response:any=res;
      this.categories = response;
        console.log(this.categories);
      if(response.success){
    
    
      }
    
    },err=>{
      alert(err.message);
     
     
    });
    
  
  }

  selected=-1;
  selected1=-1;
  tempArray: any = [];
  newArray: any = [];
  onChange(event: any)
  {
    //console.log(event.target.checked);
    if (event.target.checked ) 
    {
      this.tempArray = [];
      this.newArray = [];
 
      this.tempArray = this.postsArray.filter((e: any) => e.requiredAmount <= event.target.value);
      console.log(this.tempArray);
      this.postsArray = [];
      // console.log(this.newArray);
      this.newArray.push(this.tempArray);
      for (let i = 0; i < this.newArray.length; i++) 
      {
        var firstArray = this.newArray[i];
        for (let j = 0; j < firstArray.length; j++)
         {
          var obj = firstArray[j];
          this.postsArray.push(obj);
          console.log(this.postsArray);
        }
      }
    }
    else 
    {
    this.postsArray = this.arrays1;
    }
    
}
//filter category
categorySelect:any;
onChangeCat(event: any){
  if (event.target.checked ) {

    for(let item of this.categories){
      if(item.orgName == event.target.value){
        this.categorySelect = item.organizationId;
        console.log(this.categorySelect);
        break;
      }else{
        this.categorySelect = -1;
      }
    }
    this.tempArray = [];
    this.newArray = [];
  
    this.tempArray = this.postsArray.filter((e: any) => e.needCatogry == this.categorySelect);
    console.log(this.tempArray);
    this.postsArray = [];
   
    // console.log(this.newArray);
    this.newArray.push(this.tempArray);
    for (let i = 0; i < this.newArray.length; i++) {
      var firstArray = this.newArray[i];
      for (let j = 0; j < firstArray.length; j++) {
        var obj = firstArray[j];
        this.postsArray.push(obj);
        console.log(this.postsArray);
      }
    }
  }
  else {
  this.postsArray = this.arrays1;
  this.arrays = []
  }
}

modalReference
  opendonateform(donateform,postId) {
    this.donnation.Amount="";
    
    this.PostId=postId;
    console.log(this.PostId);
    this.modalReference = this.modalService.open(donateform);
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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



