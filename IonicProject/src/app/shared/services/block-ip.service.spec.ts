import { TestBed } from '@angular/core/testing';

import { BlockIPService } from './block-ip.service';

describe('BlockIPService', () => {
  let service: BlockIPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockIPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
