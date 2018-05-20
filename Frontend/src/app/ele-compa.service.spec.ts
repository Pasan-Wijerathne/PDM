import { TestBed, inject } from '@angular/core/testing';

import { EleCompaService } from './ele-compa.service';

describe('EleCompaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EleCompaService]
    });
  });

  it('should be created', inject([EleCompaService], (service: EleCompaService) => {
    expect(service).toBeTruthy();
  }));
});
