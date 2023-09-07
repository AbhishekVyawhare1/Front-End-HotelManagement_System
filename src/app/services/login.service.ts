import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = "http://localhost:9898/auth/token";
  constructor(private http: HttpClient) { }

  //generate token

  // public genertetoken(loginData:any)
  // {
  //      return this.http.post(`${baseUrl}/generate-token`,loginData);
  // }

  // generate(user1: any): Observable<object> {
  //   return this.http.post(`${this.baseUrl}`, user1)
  // }

  //generate token
  public generateTOken(loginData: any) {
    return this.http.post(`${this.baseUrl}`, loginData)
  }

  //Login user: Set Token In Local Storage
  public loginUser(token: string) {
    localStorage.setItem("token", token);
    return true;
  }

  //isLogin:User Is Logged In Or Not
  public isLoggedIn() {
    let tokenstr = localStorage.getItem("token")
    if (tokenstr == undefined || tokenstr == '' || tokenstr == null) {
      return false;
    } else {
      return true;
    }
  }
  //Logout: remove token from local storage 
  public logout() {
    localStorage.removeItem("token")
    return true;
  }



  //get token
  public getToken() {
    return localStorage.getItem('token');
  }

  //set userdetail
  public setuser(user: object) {
    localStorage.setItem('user1', JSON.stringify(user));
  }

  //getUser
  public getUser() {
    let userStr = localStorage.getItem("user1");
    if (userStr != null) {
      return JSON.parse(userStr);
    }
    else {
      this.logout();
      return null;
    }

    //GET USER ROLE


  }

}








