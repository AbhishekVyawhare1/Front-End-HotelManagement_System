import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private baseUrl = "http://localhost:8081/users";

  constructor(private http: HttpClient) { }

  postServiceData(user: any): Observable<any> {
    return this.http.post(this.baseUrl, user);
  }
}



// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CommonService {

//   baseUrl = "http://localhost:8081/users";
//   constructor(private http: HttpClient) { }


//   // //Post Data
//   // PostData(user1: any): Observable<object> {
//   //   return this.http.post(`${this.baseUrl}`, user1)
//   // }
//   // Method to make a POST request

//   // Method to make a POST request
//   postServiceData(User: any):Observable<any> {
//      const url = this.baseUrl; 
//     return this.http.post(this.baseUrl, User);
//   }
//   // Method to make Get request
//   // getAllUsers():Observable<any> {
//   //   const url = this.baseUrl; 
//   //   return this.http.get(url+"get");
//   // }
//   // // Method to make Delete request
//   // deleteUserById(userId:any):Observable<any> {
//   //   const url = this.baseUrl; 
//   //   return this.http.delete(url+"delete/",userId);
//   //   this.getAllUsers();
//   // }

//   // Method to make Update request
//   // updateUserById(userId:any):Observable<any> {
//   //   const url = this.baseUrl; 
//   //   return this.http.put(url+"update/",userId);
//   // }

// }




