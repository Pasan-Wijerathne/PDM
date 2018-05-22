import { TestBed, inject } from '@angular/core/testing';

import { GasServiceService } from './gas-service.service';

describe('GasServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GasServiceService]
    });
  });

  it('should be created', inject([GasServiceService], (service: GasServiceService) => {
    expect(service).toBeTruthy();
  }));
});
