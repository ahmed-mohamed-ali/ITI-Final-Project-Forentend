import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(public httpclient:HttpClient) { }

  login(user) {
    console.log(user.NationalId,user.Password);
    let nationalId=user.NationalId;
    let password=user.Password;
    return this.httpclient.post(`http://localhost:55720/api/RegionCoordinators/login`, {nationalId,password});

}

getProfile(){
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', localStorage.getItem("access_token"))
  return  this.httpclient.get(`http://localhost:55720/api/RegionCoordinators/getProfile`,{headers:headers})
}

}
