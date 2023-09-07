import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Userservice2 } from './MainDashBoard/UserService-Folder/userservice2';
import { Observable } from 'rxjs';
import { Userservice2 } from './userservice2';

@Injectable({
  providedIn: 'root'
})
export class Userservice2Service {

  baseUrl = "http://localhost:8081/users";

  constructor(private httpClient: HttpClient) { }

  addUsers(users1: Userservice2) {
    console.log(users1);
    return this.httpClient.post(`${this.baseUrl}`, users1)
  }

  getAllUSers(): Observable<Userservice2[]> {
    return this.httpClient.get<Userservice2[]>(`${this.baseUrl}`);
  }

  getUserById(userId: string): Observable<Userservice2> {
    console.log(userId);
    return this.httpClient.get<Userservice2>(`${this.baseUrl}/${userId}`);
  }

  UpdateUsersData(userserve: Userservice2): Observable<Userservice2> {
    return this.httpClient.post<Userservice2>(`${this.baseUrl}`, userserve)
  }

  //hotel by hotelId
  deleteUSER(userId: string): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/${userId}`);
  }

  //get communication data
  // baseUrl = "http://localhost:1001/getbyemailid";
  getCommunicationData(userId: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${userId}`);
  }

}
