import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../cores/services/theme.service';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './datepicker.component.html',
})
export class DatepickerComponent implements OnInit {

    date: string;

    codes = ['', '', ''];

    constructor(
        public theme: ThemeService,
        private http: HttpClient
    ) { }

    ngOnInit() {
        this.http.get('/assets/codes/datepicker-module.txt', { responseType: 'text' }).subscribe(code => {
            this.codes[0] = code;
        });
        this.http.get('/assets/codes/datepicker-html.txt', { responseType: 'text' }).subscribe(code => {
            this.codes[1] = code;
        });
        this.http.get('/assets/codes/datepicker-component.txt', { responseType: 'text' }).subscribe(code => {
            this.codes[2] = code;
        });
    }
}
