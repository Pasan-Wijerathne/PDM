import { TestBed, inject } from '@angular/core/testing';

import { LoginusrserviceService } from './loginusrservice.service';

describe('LoginusrserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginusrserviceService]
    });
  });

  it('should be created', inject([LoginusrserviceService], (service: LoginusrserviceService) => {
    expect(service).toBeTruthy();
  }));
});
