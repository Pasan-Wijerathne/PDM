import { TestBed, inject } from '@angular/core/testing';

import { ElectserviceService } from './electservice.service';

describe('ElectserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectserviceService]
    });
  });

  it('should be created', inject([ElectserviceService], (service: ElectserviceService) => {
    expect(service).toBeTruthy();
  }));
});
