/**
 * 日期，时间选择
 *
 * @author xiaojian
 * @file   datepicker.component.ts
 * @date   2018-6-26 22:16:50
 */
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../cores/services';

@Component({
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

    time = '12:30:00';

    constructor(public global: GlobalService) { }

    ngOnInit() { }
}
