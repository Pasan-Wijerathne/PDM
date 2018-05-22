import { TestBed, inject } from '@angular/core/testing';

import { VehicleserviceService } from './vehicleservice.service';

describe('VehicleserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleserviceService]
    });
  });

  it('should be created', inject([VehicleserviceService], (service: VehicleserviceService) => {
    expect(service).toBeTruthy();
  }));
});
