import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../cores/services';
import { Pagination } from 'ng-tools-ui';

@Component({
    selector: 'app-order-table',
    templateUrl: './order-table.component.html',
    styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {


    loading = false;

    pagination = new Pagination();

    constructor(
        public global: GlobalService,
    ) { }

    ngOnInit() {

    }

    doSearch() {
        this.pagination.reset();
        this.loadDatas();
    }

    doReset() {

    }

    loadDatas() {
        this.loading = true;
        // this.companyService.searchCompany(this.pagination, this.search).subscribe({
        //     next: res => {
        //         this.pagination.total = res.datas.total;
        //         this.list = res.datas.rows;
        //     },
        //     complete: () => this.loading = false
        // });
    }
}
