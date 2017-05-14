import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() pinned: boolean;
  @Input() active: boolean;
  @Input() time: any;

  constructor() {}

  ngOnInit() {}

  momentify(date: any) {
    let val = moment().subtract(date).format('HH:MM:ss');
    console.log(val);
    return val;
  }
}
