//import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/service/jwt.service';
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
 // bsModalRef: BsModalRef
 // private modalService: BsModalService
  //private changeDetection: ChangeDetectorRef
  constructor(public jwtservice:JwtService) { }
 /* reg(){
    let bsModalRef = this.modalService.show(DonateComponent);
    
  }*/
 
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
  }
  ngOnInit(): void {
    this.subscriber=this.jwtservice.getRegionPost().subscribe(res =>{

      let response:any=res;
      if(response.success){
        this.postsArray=response.post;
        console.log(response.post);
    
      }
    
    },err=>{
      alert(err.message);
      // console.log(err)
      // console.log(err.status)
      // console.log(err.statusText)
      // console.log(err.message)
    })

    
  }

  // postsArray : any = [
  //   {
  //     postId : 0 ,
  //     postTxt : "post 1",
  //     requiredAmount : 1000,
  //     needCatogry : "money",
  //     restAmount : 12000
  //   },
  // ]
}



