import { TestBed, inject } from '@angular/core/testing';

import { GardenserviceService } from './gardenservice.service';

describe('GardenserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GardenserviceService]
    });
  });

  it('should be created', inject([GardenserviceService], (service: GardenserviceService) => {
    expect(service).toBeTruthy();
  }));
});
