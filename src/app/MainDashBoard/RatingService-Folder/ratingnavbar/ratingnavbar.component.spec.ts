import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingnavbarComponent } from './ratingnavbar.component';

describe('RatingnavbarComponent', () => {
  let component: RatingnavbarComponent;
  let fixture: ComponentFixture<RatingnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingnavbarComponent]
    });
    fixture = TestBed.createComponent(RatingnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
