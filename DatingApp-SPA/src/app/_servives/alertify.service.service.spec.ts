/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Alertify.serviceService } from './alertify.service.service';

describe('Service: Alertify.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Alertify.serviceService]
    });
  });

  it('should ...', inject([Alertify.serviceService], (service: Alertify.serviceService) => {
    expect(service).toBeTruthy();
  }));
});
