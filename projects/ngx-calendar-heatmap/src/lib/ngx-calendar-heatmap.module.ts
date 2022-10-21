import { NgModule } from '@angular/core';
import { NgxCalendarHeatmapComponent } from './ngx-calendar-heatmap.component';
import { MomentModule } from 'ngx-moment';


@NgModule({
  declarations: [
    NgxCalendarHeatmapComponent
  ],
  imports: [
    MomentModule
  ],
  exports: [
    NgxCalendarHeatmapComponent
  ]
})
export class NgxCalendarHeatmapModule { }
