import { Component,OnInit} from '@angular/core';
import { HotelService2 } from '../hotel-service2';
import { HotelsServiceService } from '../hotels-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-hotels',
  templateUrl: './create-hotels.component.html',
  styleUrls: ['./create-hotels.component.css']
})
export class CreateHotelsComponent implements OnInit{


  hotelservice2: HotelService2= new HotelService2();

  constructor(private hotelsrvice: HotelsServiceService,private router: Router){}

  ngOnInit(): void {

  }

  addHotelData(){
    this.hotelsrvice.addHotels(this.hotelservice2).subscribe(data=>{
      alert("Hotel Data Inserted SuccessFully")
      this.goTOListinHotels();
    }, ()=>alert("Not able data to insert"));
  }

  goTOListinHotels(){
    this.router.navigate(['/list-hotels']);
  }

}
