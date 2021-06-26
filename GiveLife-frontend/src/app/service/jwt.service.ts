import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(public httpclient:HttpClient) { }

  login(user) {
    console.log(user.NID,user.password);
    let nationalId=user.NID;
    let password=user.password;
    return this.httpclient.post(`http://localhost:55720/api/RegionCoordinators/login`, {nationalId,password});

}

getProfile(){
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', localStorage.getItem("access_token"))
  return  this.httpclient.get(`http://localhost:55720/api/RegionCoordinators/getProfile`,{headers:headers})
}

/////Randa:sure/////

logout() {
  localStorage.removeItem('access_token');
  if(localStorage.getItem('user')){

    localStorage.removeItem('user');
  }
  window.location.reload();
}

public get loggedIn(): boolean{
  return localStorage.getItem('access_token') !==  null;
}

public get user(): boolean{
  return localStorage.getItem('user') !==  null;
}

////////////////////////////////////////

Register(newUser){
return  this.httpclient.post(`http://localhost:55720/api/RegionCoordinators/Register`,newUser);
}

getCupon(){
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', localStorage.getItem("access_token"))
  return  this.httpclient.get(`http://localhost:55720/api/Cupons/getCoordinatorCupon`,{headers:headers});
}
getCoordinatorPost(){
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', localStorage.getItem("access_token"))
  return  this.httpclient.get(`http://localhost:55720/api/Posts/getCoordinatorposts`,{headers:headers});
}

getRegionPost(){
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', localStorage.getItem("access_token"))
  return  this.httpclient.get(`http://localhost:55720/api/Posts/getRegionposts`,{headers:headers});
}

}
