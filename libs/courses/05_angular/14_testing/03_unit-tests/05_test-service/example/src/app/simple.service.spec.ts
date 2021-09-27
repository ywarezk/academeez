import { TestBed } from '@angular/core/testing';

import { SimpleService } from './simple.service';

describe('SimpleService', () => {
  let service: SimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleService);
  });

  it('should be created', () => {
    expect(service.hello()).toEqual('hello world');
  });
});
