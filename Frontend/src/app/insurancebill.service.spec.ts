import { TestBed, inject } from '@angular/core/testing';

import { InsurancebillService } from './insurancebill.service';

describe('InsurancebillService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsurancebillService]
    });
  });

  it('should be created', inject([InsurancebillService], (service: InsurancebillService) => {
    expect(service).toBeTruthy();
  }));
});
