import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServiceComponent } from './user-service.component';

describe('UserServiceComponent', () => {
  let component: UserServiceComponent;
  let fixture: ComponentFixture<UserServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserServiceComponent]
    });
    fixture = TestBed.createComponent(UserServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
