import { TestBed } from '@angular/core/testing';

import { CornonaService } from './cornona.service';

describe('CornonaService', () => {
  let service: CornonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CornonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
