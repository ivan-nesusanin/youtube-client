import { TestBed } from '@angular/core/testing';

import { BackToSearchPageService } from './back-to-search-page.service';

describe('BackToSearchPageService', () => {
  let service: BackToSearchPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackToSearchPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
