import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaterialModule} from '@angular/material';

import {TimerComponent} from './timer.component';

@NgModule({
  imports: [MaterialModule, CommonModule],
  declarations: [TimerComponent],
  exports: [TimerComponent]
})
export class TimerModule {
}