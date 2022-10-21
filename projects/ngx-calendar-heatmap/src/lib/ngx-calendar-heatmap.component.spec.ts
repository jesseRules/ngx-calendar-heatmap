import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCalendarHeatmapComponent } from './ngx-calendar-heatmap.component';

describe('NgxCalendarHeatmapComponent', () => {
  let component: NgxCalendarHeatmapComponent;
  let fixture: ComponentFixture<NgxCalendarHeatmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCalendarHeatmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCalendarHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
