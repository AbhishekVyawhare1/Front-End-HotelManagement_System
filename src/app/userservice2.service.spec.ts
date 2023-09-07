import { TestBed } from '@angular/core/testing';

import { Userservice2Service } from './userservice2.service';

describe('Userservice2Service', () => {
  let service: Userservice2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Userservice2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
