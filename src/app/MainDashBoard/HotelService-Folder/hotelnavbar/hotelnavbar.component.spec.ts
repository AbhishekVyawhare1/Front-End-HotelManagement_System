import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelnavbarComponent } from './hotelnavbar.component';

describe('HotelnavbarComponent', () => {
  let component: HotelnavbarComponent;
  let fixture: ComponentFixture<HotelnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelnavbarComponent]
    });
    fixture = TestBed.createComponent(HotelnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
