import { TestBed } from '@angular/core/testing';

import { JsonpathService } from './jsonpath.service';

describe('JsonpathService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonpathService = TestBed.get(JsonpathService);
    expect(service).toBeTruthy();
  });
});
