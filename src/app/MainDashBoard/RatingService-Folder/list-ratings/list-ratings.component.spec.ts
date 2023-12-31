import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRatingsComponent } from './list-ratings.component';

describe('ListRatingsComponent', () => {
  let component: ListRatingsComponent;
  let fixture: ComponentFixture<ListRatingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRatingsComponent]
    });
    fixture = TestBed.createComponent(ListRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
