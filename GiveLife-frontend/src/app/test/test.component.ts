import { Component, OnInit } from '@angular/core';
import { JwtService } from '../service/jwt.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

   user={
    NationalId:"11111111111111",
    Password:"88888888"
   } 
   subscriber
  constructor(public jwtservice:JwtService) { }


  login(){
this.subscriber=this.jwtservice.login(this.user).subscribe(res =>{

  let response:any=res;
  console.log(response);
  if(response.success){

    localStorage.setItem('access_token', `Bearer ${response.token}`);
  }

},err=>{
  console.log(err)
  console.log(err.status)
  console.log(err.statusText)
  console.log(err.message)
})
 
  }

  logOut() {
    localStorage.removeItem('access_token');
 }

  getProfile(){
    this.subscriber=this.jwtservice.getProfile().subscribe(res =>{

      let response:any=res;
      if(response.success){
        console.log(response);
    
      }
    
    },err=>{
      console.log(err)
      console.log(err.status)
      console.log(err.statusText)
      console.log(err.message)
    })
  }

  getCoordinatorPosts(){
    this.subscriber=this.jwtservice.getCoordinatorPost().subscribe(res =>{

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

  getRegionPosts(){
    this.subscriber=this.jwtservice.getRegionPost().subscribe(res =>{

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

postID=1
donnateAmount=580
 donnatePosts(){
    this.subscriber=this.jwtservice.donatePost(this.postID,this.donnateAmount).subscribe(res =>{

      let response:any=res;
      if(response.success){
        console.log(response);
    
      }
    
    },err=>{
      alert(err.error);
      console.log(err.error)
      console.log(err.status)
      console.log(err.statusText)
      console.log(err.message)
    })
  }

  post={
    PostMessage:"post from front end",
    RequiredAmount:"1000",
    NeedCatogry:"food",
    CaseNationalId:1
  }

publishPosts(){
    this.subscriber=this.jwtservice.publishPost(this.post).subscribe(res =>{

      let response:any=res;
      if(response.success){
        console.log(response);
    
      }
    
    },err=>{
      alert(err.error);
      console.log(err.error)
      console.log(err.status)
      console.log(err.statusText)
      console.log(err.message)
    })
  }

  ngOnInit(): void {

  }

}
