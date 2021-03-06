import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarComponent } from './component/calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module';

@NgModule({
  declarations: [CalendarComponent],
  imports: [CommonModule, CalendarRoutingModule],
  exports: [CalendarComponent],
})
export class CalendarModule {}
