import { TestBed } from '@angular/core/testing';

import { SocialnetService } from './socialnet.service';

describe('SocialnetService', () => {
  let service: SocialnetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialnetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
