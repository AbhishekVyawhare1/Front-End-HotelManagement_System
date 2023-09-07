import { Component, OnInit} from '@angular/core';
import { HotelService2 } from '../hotel-service2';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelsServiceService } from '../hotels-service.service';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent implements OnInit{


  constructor(private activeRouter: ActivatedRoute,
    private hotelservice: HotelsServiceService, private router: Router){}

  hotelId!: string;
  hotelservice2: HotelService2=new HotelService2();

  ngOnInit(): void {
    this.hotelId=this.activeRouter.snapshot.params['hotelId'];
    console.log(this.hotelId);
    this.hotelservice.getHotelById(this.hotelId).subscribe(data=>{
      this.hotelservice2=data;
      console.log(this.hotelservice2);
    })

  }

  UPDATEHotelData (){
    this.hotelservice.UpdateHotelDataHere(this.hotelservice2).subscribe(data=>{
       alert("Updated Successfully");
       this.router.navigate(['/list-hotels'])
    }, error=>alert("not updated"))
  }

}
