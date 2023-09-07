import { Component, OnInit } from '@angular/core';
import { RatingServiceService } from '../rating-service.service';
import { RatingService2 } from '../rating-service2';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-ratings',
  templateUrl: './list-ratings.component.html',
  styleUrls: ['./list-ratings.component.css']
})
export class ListRatingsComponent implements OnInit {


  constructor(private ratingService: RatingServiceService, private router: Router) { }

  ratingService2: RatingService2[] = [];

  ngOnInit(): void {
    this.ratingService.getAllatings().subscribe(data => {
      this.ratingService2 = data;
    })
  }



  updateRATINGS(ratingId: string) {
    console.log(ratingId);
    this.router.navigate(["update-rating", ratingId]);
  }


  deleteRatings(ratingId: string) {
    this.ratingService.deleteRating(ratingId).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    })
  }
}
