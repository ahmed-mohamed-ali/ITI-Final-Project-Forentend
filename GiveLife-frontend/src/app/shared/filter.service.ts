import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  donateService(){
    return [
      //pass API
      {
        id : 1,
        amount : 1000
      },
      {
        id : 2,
        amount : 2000
      },
      {
        id : 2,
        amount : 2000
      },
      {
        id : 4,
        amount : 4000
      },
      {
        id : 4,
        amount : 4000
      },
      {
        id : 4,
        amount : 4000
      },
    ]
  }
}
