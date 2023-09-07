import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RatingService2 } from './rating-service2';
import { Observable } from 'rxjs';
import { Userservice2 } from 'src/app/userservice2';

@Injectable({
  providedIn: 'root'
})
export class RatingServiceService {
  
  
 
  

  baseURL = "http://localhost:8083/ratings";

  constructor(private httpClient: HttpClient) { }


  //Add Ratings
  AddRatings(ratingService2: RatingService2) {
    console.log(ratingService2);
    return this.httpClient.post(`${this.baseURL}`, ratingService2);
  }

  //GET ALL RATINGS
  getAllatings(): Observable<RatingService2[]>{
    return this.httpClient.get<RatingService2[]>(`${this.baseURL}`)
  }

  //Get Rating By Id
  getRatingById(ratingId: string):Observable<RatingService2>{
    return this.httpClient.get<RatingService2>(`${this.baseURL}/${ratingId}`);
  }


  // UODATE BY ID
  UpdateStudentData(ratings:RatingService2):Observable<RatingService2>{
    return this.httpClient.post<RatingService2>(`${this.baseURL}`,ratings);
  }

  deleteRating(ratingId: string):Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${ratingId}`);
  }

  //get Rating By UserId
  getRatingByUserId(UserId: string):Observable<Userservice2>{
    return this.httpClient.get<Userservice2>("http://localhost:8081/users")
  }





}
