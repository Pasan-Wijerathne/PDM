import { TestBed, inject } from '@angular/core/testing';

import { UsrUtilService } from './usr-util.service';

describe('UsrUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsrUtilService]
    });
  });

  it('should be created', inject([UsrUtilService], (service: UsrUtilService) => {
    expect(service).toBeTruthy();
  }));
});
