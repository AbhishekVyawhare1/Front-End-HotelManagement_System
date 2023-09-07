import { Component, OnInit } from '@angular/core';
import { RatingService2 } from '../rating-service2';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RatingServiceService } from '../rating-service.service';

@Component({
  selector: 'app-update-rating',
  templateUrl: './update-rating.component.html',
  styleUrls: ['./update-rating.component.css']
})
export class UpdateRatingComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute, private ratingService: RatingServiceService,
    private router: Router) { }

  ratingId!: string;

  ratingService2: RatingService2 = new RatingService2();

  ngOnInit(): void {
    this.ratingId = this.activeRouter.snapshot.params['ratingId'];
    console.log(this.ratingId);
    this.ratingService.getRatingById(this.ratingId).subscribe(data=>{
      this.ratingService2=data;
      console.log(this.ratingService2);
    })
  }

  UPDATERatingData() {
    this.ratingService.UpdateStudentData(this.ratingService2).subscribe(data=>{
      alert("UPDATED ");
      this.router.navigate(['/listRatings']);
    },error=>alert("Unable TO UPDATED"))
  }

}
