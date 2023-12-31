import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRatingComponent } from './update-rating.component';

describe('UpdateRatingComponent', () => {
  let component: UpdateRatingComponent;
  let fixture: ComponentFixture<UpdateRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRatingComponent]
    });
    fixture = TestBed.createComponent(UpdateRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
