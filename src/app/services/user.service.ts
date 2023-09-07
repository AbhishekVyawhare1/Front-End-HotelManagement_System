import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:9898/auth/register";
  constructor(private http: HttpClient) { }



  //add user
  addUser(user1: any): Observable<object> {
    return this.http.post(`${this.baseUrl}`, user1)
  }
}
