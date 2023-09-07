import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotelService2 } from './hotel-service2';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsServiceService {
 

  baseURL="http://localhost:8082/hotels";

  constructor(private httpClient: HttpClient ) { }


  //TO Add Hotels in hotels
  addHotels(hotelservice2 : HotelService2){
    console.log(hotelservice2);
    return this.httpClient.post(`${this.baseURL}`,hotelservice2);
  }

  //and we get all Hotels here
  GetAllHotels(): Observable<HotelService2[]>{
    return this.httpClient.get<HotelService2[]>(`${this.baseURL}`);
  }

  //GET HOTEL BY ID NOW
  getHotelById(hotelId:string): Observable<HotelService2>{
    console.log(hotelId);
    return this.httpClient.get<HotelService2>(`${this.baseURL}/${hotelId}`);
  }

  //hotel by hotelId
  deleteHotel(hotelId: string):Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${hotelId}`);
  }


  //Update Method
  UpdateHotelDataHere(hotelservice2: HotelService2): Observable<HotelService2>{
    return this.httpClient.post<HotelService2>(`${this.baseURL}`,hotelservice2);
    }
}
