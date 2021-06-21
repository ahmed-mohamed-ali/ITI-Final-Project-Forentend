import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  postsArray : any = [
    {
      postId : 0 ,
      postTxt : "post 1",
      requiredAmount : 1000,
      needCatogry : "money",
      restAmount : 12000
    },
  ]
}
