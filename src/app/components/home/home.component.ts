import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = `App works !`;
  today: any;

  constructor() {}

  ngOnInit() {
    this.today = moment();
  }
}
