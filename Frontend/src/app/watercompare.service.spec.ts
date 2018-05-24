import { TestBed, inject } from '@angular/core/testing';

import { WatercompareService } from './watercompare.service';

describe('WatercompareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WatercompareService]
    });
  });

  it('should be created', inject([WatercompareService], (service: WatercompareService) => {
    expect(service).toBeTruthy();
  }));
});
