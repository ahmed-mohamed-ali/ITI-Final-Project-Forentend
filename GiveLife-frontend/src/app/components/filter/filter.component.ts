import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FilterService } from '../../shared/filter.service'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private router: Router, private filter: FilterService) { }

  ngOnInit(): void {
    this.getDonate();
  }

  checkBoxArray: any = [
    {
      id: 1,
      type: "checkbox",
      amount: 1000
    },
    {
      id: 2,
      type: "checkbox",
      amount: 2000
    },
    {
      id: 3,
      type: "checkbox",
      amount: 3000
    },
    {
      id: 4,
      type: "checkbox",
      amount: 4000
    }
  ];


  donateArray: any[];
  arrays: any[];
  getDonate() {
    //recieve array from service
    this.donateArray = this.filter.donateService();
    this.arrays = this.filter.donateService();
    //console.log(this.arrays);
  }

  tempArray: any = [];
  newArray: any = [];
  onChange(event: any) {
    //console.log(event.target.checked);
    if (event.target.checked) {
      this.tempArray = this.arrays.filter((e: any) => e.id == event.target.value);
      //console.log(this.tempArray);
      this.donateArray = [];
      // console.log(this.newArray);
      this.newArray.push(this.tempArray);
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i];
        for (let j = 0; j < firstArray.length; j++) {
          var obj = firstArray[j];
          this.donateArray.push(obj);
          console.log(this.donateArray);
        }
      }
    }
    else {
      this.tempArray = this.donateArray.filter((e: any) => e.id != event.target.value);
      this.newArray = [];
      this.donateArray = [];
      this.newArray.push(this.tempArray);
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i];
        for (let j = 0; j < firstArray.length; j++) {
          var obj = firstArray[j];
          this.donateArray.push(obj);
          console.log(this.donateArray);
        }
      }
    }
  }
}
