/**
 * 请编写页面文件说明
 *
 * @author 填写作者
 * @file   datepicker.component.ts
 * @date   2018-6-26 22:16:50
 */
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

    hours = [];
    minutes = [];
    seconds = [];

    constructor() {
        for (let i = 0; i < 24; i++) {
            this.hours.push(i);
        }
        for (let i = 0; i < 60; i++) {
            this.minutes.push(i);
            this.seconds.push(i);
        }
    }

    ngOnInit() {

    }
}
