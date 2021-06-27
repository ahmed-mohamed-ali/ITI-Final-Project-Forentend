import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../service/jwt.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

 regionPosts:any;
  subscriber
  constructor(public jwtservice:JwtService) { }

  ngOnInit(): void {
    this.subscriber=this.jwtservice.getRegionPost().subscribe(res =>{

      let response:any=res;
      if(response.success){
        console.log(response);
        this.regionPosts = response.post;
        console.log(this.regionPosts);
      }
    
    },err=>{
      alert(err.message);
      console.log(err)
      console.log(err.status)
      console.log(err.statusText)
      console.log(err.message)
    })
  }

}
