import { TestBed, inject } from '@angular/core/testing';

import { ConsumsService } from './consums.service';

describe('ConsumsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsumsService]
    });
  });

  it('should be created', inject([ConsumsService], (service: ConsumsService) => {
    expect(service).toBeTruthy();
  }));
});
