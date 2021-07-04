import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService implements OnInit {

ApiURl="https://givelife.azurewebsites.net";
  constructor(public httpclient:HttpClient) {
     
   }
  ngOnInit(): void {
   
  }
  

  login(user) {
    console.log(user.NID,user.password);
    let nationalId=user.NID;
    let password=user.password;
    return this.httpclient.post(`${this.ApiURl}/api/RegionCoordinators/login`, {nationalId,password});

}


getProfile(){
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', localStorage.getItem("access_token"))
  return  this.httpclient.get(`${this.ApiURl}/api/RegionCoordinators/getProfile`,{headers:headers})
}

/////Randa:sure/////

logout() {
  localStorage.removeItem('access_token');
 window.location.replace('')
  
  }

public get loggedIn(): boolean{
  return localStorage.getItem('access_token') !==  null;
}



////////////////////////////////////////

Register(newUser){
return  this.httpclient.post(`${this.ApiURl}/api/RegionCoordinators/Register`,newUser);
}

getCupon(){
  let headers = new HttpHeaders();
 
  headers = headers.set('Authorization', localStorage.getItem("access_token"))

  return  this.httpclient.get(`${this.ApiURl}/api/Cupons/getCoordinatorCupon`,{headers:headers});
  
}
getCoordinatorPost(){
  window.location.reload();
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', localStorage.getItem("access_token"))
  return  this.httpclient.get(`${this.ApiURl}/api/Posts/getCoordinatorposts`,{headers:headers});
}

getRegionPost(){
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', localStorage.getItem("access_token"))
  
  return  this.httpclient.get(`${this.ApiURl}/api/Posts/getRegionposts`,{headers:headers});
}
donatePost(postId,donnateAmount){
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', localStorage.getItem("access_token"))
  return  this.httpclient.put(`${this.ApiURl}/api/Posts/donate/${postId}?donateAmount=${donnateAmount}`,null,{headers:headers});
}


publishPost(post){
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', localStorage.getItem("access_token"))
  return  this.httpclient.post(`${this.ApiURl}/api/Posts/coord/publish`,post,{headers:headers});
  
}

getOrganization(){

  let headers = new HttpHeaders();

  headers = headers.set('Authorization', localStorage.getItem("access_token"))

  return this.httpclient.get(`${this.ApiURl}/api/organizations`,{headers:headers});

}

}