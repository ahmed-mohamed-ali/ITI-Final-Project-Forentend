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
donatePost(postId,donnateAmount){
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', localStorage.getItem("access_token"))
  return  this.httpclient.put(`http://localhost:55720/api/Posts/donate/${postId}?donateAmount=${donnateAmount}`,null,{headers:headers});
}


publishPost(post){
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', localStorage.getItem("access_token"))
  return  this.httpclient.post(`http://localhost:55720/api/Posts/coord/publish`,post,{headers:headers});
  
}

}
