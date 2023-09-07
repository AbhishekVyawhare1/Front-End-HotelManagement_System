import { Component , OnInit} from '@angular/core';
import { HotelService2 } from '../hotel-service2';
import { HotelsServiceService } from '../hotels-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-hotels',
  templateUrl: './list-hotels.component.html',
  styleUrls: ['./list-hotels.component.css']
})
export class ListHotelsComponent implements OnInit{

  hotelservice2: HotelService2[]=[];
  

  constructor(private hotelserviceservice: HotelsServiceService, private router: Router){}
  ngOnInit(): void {
    this.hotelserviceservice.GetAllHotels().subscribe(data=>{
      this.hotelservice2=data;
    })
  }

  updateHotel(hotelId:string){
    console.log(hotelId);
    this.router.navigate(['update-hotel',hotelId]);
  }
  
  deleteHotel(hotelId: string){
    this.hotelserviceservice.deleteHotel(hotelId).subscribe(data=>{
     console.log(data);
      this.ngOnInit();
    })
  }
}
