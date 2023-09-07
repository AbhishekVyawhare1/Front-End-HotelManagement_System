import { Component, OnInit } from '@angular/core';
import { RatingService2 } from '../rating-service2';
import { RatingServiceService } from '../rating-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ratings',
  templateUrl: './add-ratings.component.html',
  styleUrls: ['./add-ratings.component.css']
})
export class AddRatingsComponent implements OnInit {


  ratingService2: RatingService2 = new RatingService2();

  constructor(private ratingService: RatingServiceService, private router: Router) { }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  addRatingData() {
    this.ratingService.AddRatings(this.ratingService2).subscribe(data=>{
      alert("Rating Added SuccessFully");
      this.goTOListinRatings();
    },error=>("Not Ablee To Add Rating  mahiti"));
  }

  goTOListinRatings(){
    this.router.navigate(['/listRatings']);
  }

  
}
