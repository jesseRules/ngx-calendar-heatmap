import { TestBed } from '@angular/core/testing';

import { NgxCalendarHeatmapService } from './ngx-calendar-heatmap.service';

describe('NgxCalendarHeatmapService', () => {
  let service: NgxCalendarHeatmapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCalendarHeatmapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
