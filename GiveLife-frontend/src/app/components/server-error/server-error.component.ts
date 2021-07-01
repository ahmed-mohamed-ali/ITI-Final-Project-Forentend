import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as Vivus from 'vivus';
@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit {
  public errorMessage: string = "500 SERVER ERROR, CONTACT ADMINISTRATOR!!!!";
  constructor() { }

  ngOnInit(): void {
   let render_error = new Vivus('render_error', {type: 'oneByOne', duration: 500});
  }
 
  
}
