import { TestBed } from '@angular/core/testing';

import { ShowSortPanelService } from './show-sort-panel.service';

describe('ShowSortPanelService', () => {
  let service: ShowSortPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowSortPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
