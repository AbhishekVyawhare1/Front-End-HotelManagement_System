import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHotelsComponent } from './create-hotels.component';

describe('CreateHotelsComponent', () => {
  let component: CreateHotelsComponent;
  let fixture: ComponentFixture<CreateHotelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHotelsComponent]
    });
    fixture = TestBed.createComponent(CreateHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
