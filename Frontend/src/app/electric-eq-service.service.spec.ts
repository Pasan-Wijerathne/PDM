import { TestBed, inject } from '@angular/core/testing';

import { ElectricEqServiceService } from './electric-eq-service.service';

describe('ElectricEqServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectricEqServiceService]
    });
  });

  it('should be created', inject([ElectricEqServiceService], (service: ElectricEqServiceService) => {
    expect(service).toBeTruthy();
  }));
});
