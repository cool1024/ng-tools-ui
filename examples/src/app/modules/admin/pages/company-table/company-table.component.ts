import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../cores/services/theme.service';
import { Pagination } from 'ng-tools-ui';

@Component({
    templateUrl: './company-table.component.html',
})
export class CompanyTableComponent implements OnInit {


    theads = ['#', '图标', '商户名', '账号', '负责人电话', '创建时间', '状态', '操作'];

    search = { start: '', end: '' };

    pagination = new Pagination(200);

    constructor(public theme: ThemeService) { }

    ngOnInit() {

    }

}
