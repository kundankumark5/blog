import { TestBed } from '@angular/core/testing';

import { Sevice4modelService } from './sevice4model.service';

describe('Sevice4modelService', () => {
  let service: Sevice4modelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sevice4modelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
