import { Component, OnInit, ViewChild } from '@angular/core';
import { Pagination } from 'ng-tools-ui';
import { RouterOutlet } from '@angular/router';
import { GlobalService, RequestService } from '../../../../cores/services';

@Component({
    templateUrl: './simple.component.html',
    styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

    // 表格数据
    list = new Array<any>();

    // 表格标题
    theads = new Array<string>();

    pagination = new Pagination();

    search = { start: '', end: '' };

    constructor(
        private reqeust: RequestService,
        public global: GlobalService) { }

    ngOnInit() {

        this.theads = ['No.', '会员', '联系电话', '收货地址', '注册日期', '操作'];
        this.pagination.total = 1000;
        this.pageChanged();
    }

    pageChanged() {
        const apiUrl = `https://randomuser.me/api/?page=${this.pagination.page}&results=${this.pagination.limit}`;
        this.reqeust.withoutHost().text(apiUrl).subscribe(res => {
            const response = JSON.parse(res);
            this.list = new Array<any>();
            response.results.forEach(user => {
                this.list.push({
                    avatar: user.picture.thumbnail,
                    nick: user.name.first,
                    email: user.email,
                    gender: user.gender,
                    cell: user.cell,
                    phone: user.phone,
                    address: `${user.location.city} ${user.location.street}`,
                    registered: user.registered
                });
            });
        });
    }

}
