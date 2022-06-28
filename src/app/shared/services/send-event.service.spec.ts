import { TestBed } from '@angular/core/testing';

import { SendEventService } from './send-event.service';

describe('SendEventService', () => {
  let service: SendEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
