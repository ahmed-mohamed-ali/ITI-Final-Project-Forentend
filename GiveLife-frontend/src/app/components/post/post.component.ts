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
  Moneyamount:any=0;
  arrays: any[];
  arrays1: any[];
  filterNum:any[];
  filterCat:any[];
  constructor(public jwtservice:JwtService,private modalService: NgbModal) { }

  donateToPost(amount){
    console.log(this.PostId,amount);
    this.subscriber=this.jwtservice.donatePost(this.PostId,amount).subscribe(res =>{

      let response:any=res;
      if(response.success){
        console.log(response);
    
      }
    
    },err=>{

      alert(err.message);
      console.log(err)

      alert(err.error);
      console.log(err.error)

      console.log(err.status)
      console.log(err.statusText)
      console.log(err.message)
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
        this.filterNum=response.post;
        this.filterCat = response.post;
        
      }
    
    },err=>{
      alert(err.message);
      // console.log(err)
      // console.log(err.status)
      // console.log(err.statusText)
      // console.log(err.message)
    })

    
  
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
      console.log(this.filterCat);
      this.tempArray = this.filterCat.filter((e: any) => e.requiredAmount <= event.target.value);
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
       
         
        }
      }this.filterNum = this.postsArray;
    }
    else 
    {
      this.selected = -1
      if(this.filterCat.length == 0 && this.selected1 ==-1){
       
        this.postsArray = this.arrays1;
        this.filterNum =  this.postsArray;
      }else{
        this.postsArray = this.filterCat;
  this.filterNum = this.arrays1;
      }
  
   
    }
    
}
//filter category

onChangeCat(event: any){
  if (event.target.checked ) {

    
    this.tempArray = [];
    this.newArray = []; 
    this.tempArray = this.filterNum.filter((e: any) => e.needCatogry == event.target.value);
    console.log(this.tempArray);
    this.postsArray = [];
   
    // console.log(this.newArray);
    this.newArray.push(this.tempArray);
    for (let i = 0; i < this.newArray.length; i++) {
      var firstArray = this.newArray[i];
      for (let j = 0; j < firstArray.length; j++) {
        var obj = firstArray[j];
        this.postsArray.push(obj);
       
       
      }
    } this.filterCat = this.postsArray
   
  }
  else {
    console.log(this.selected1);
    this.selected1 = -1
    if(this.filterNum.length == 0 && this.selected == -1){
      this.postsArray = this.arrays1;

      this.filterCat =  this.postsArray;
      
    }
    else{
      this.postsArray = this.filterNum;
      this.filterCat = this.arrays1;
    }
 
  }
}


  opendonateform(donateform,postId) {
    this.PostId=postId;
    console.log(this.PostId);
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



