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

  ngOnInit(): void {

  }

}
