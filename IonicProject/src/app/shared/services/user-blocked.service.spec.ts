import { TestBed } from '@angular/core/testing';

import { UserBlockedService } from './user-blocked.service';

describe('UserBlockedService', () => {
  let service: UserBlockedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBlockedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
