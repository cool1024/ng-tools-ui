import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../cores/services/theme.service';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './datepicker.component.html',
})
export class DatepickerComponent implements OnInit {

    date: string;

    code = '';

    constructor(
        public theme: ThemeService,
        private http: HttpClient
    ) { }

    ngOnInit() {
        this.http.get('/assets/codes/datepicker.txt', { responseType: 'text' }).subscribe(code => {
            this.code = <string>code;
            console.log(this.code);
        });
    }
}
