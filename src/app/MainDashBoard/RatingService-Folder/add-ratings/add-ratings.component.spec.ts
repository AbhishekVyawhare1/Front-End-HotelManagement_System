import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRatingsComponent } from './add-ratings.component';

describe('AddRatingsComponent', () => {
  let component: AddRatingsComponent;
  let fixture: ComponentFixture<AddRatingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRatingsComponent]
    });
    fixture = TestBed.createComponent(AddRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
