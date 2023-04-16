import { TestBed } from '@angular/core/testing';

import { Service4APIService } from './service4-api.service';

describe('Service4APIService', () => {
  let service: Service4APIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service4APIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
