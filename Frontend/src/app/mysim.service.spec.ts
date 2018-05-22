import { TestBed, inject } from '@angular/core/testing';

import { MysimService } from './mysim.service';

describe('MysimService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MysimService]
    });
  });

  it('should be created', inject([MysimService], (service: MysimService) => {
    expect(service).toBeTruthy();
  }));
});
