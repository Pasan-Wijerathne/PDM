import { TestBed, inject } from '@angular/core/testing';

import { MedicineserviceService } from './medicineservice.service';

describe('MedicineserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicineserviceService]
    });
  });

  it('should be created', inject([MedicineserviceService], (service: MedicineserviceService) => {
    expect(service).toBeTruthy();
  }));
});
