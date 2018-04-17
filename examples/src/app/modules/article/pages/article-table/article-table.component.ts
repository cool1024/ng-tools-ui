import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../cores/services/theme.service';
import { Pagination } from 'ng-tools-ui';

@Component({
    templateUrl: './article-table.component.html',
})
export class ArticleTableComponent implements OnInit {


    search = { start: '', end: '' };

    pagination = new Pagination(200);

    constructor(public theme: ThemeService) { }

    ngOnInit() {

    }

}
