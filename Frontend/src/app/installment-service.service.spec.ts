import { TestBed, inject } from '@angular/core/testing';

import { InstallmentServiceService } from './installment-service.service';

describe('InstallmentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstallmentServiceService]
    });
  });

  it('should be created', inject([InstallmentServiceService], (service: InstallmentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
