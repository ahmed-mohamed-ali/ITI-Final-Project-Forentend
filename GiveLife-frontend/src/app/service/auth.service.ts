import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false); 
  constructor() { }

  get isLoggedIn():any {
    
    if (localStorage.getItem('access_token') !==  null) {
      this.loggedIn.next(true);
    
    }
    console.log(this.loggedIn);
    return this.loggedIn.asObservable(); 
  }
}
