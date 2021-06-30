import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable,pipe } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authservice: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      return this.authservice.isLoggedIn.pipe(
        take(1),                             
        map(
          (isLoggedIn: boolean) => {  
          console.log("login",isLoggedIn);      
          if (!isLoggedIn){
            
            this.router.navigate(['/signin']); 
            return false;
          }
          return true;
        })
      )
  }
}
