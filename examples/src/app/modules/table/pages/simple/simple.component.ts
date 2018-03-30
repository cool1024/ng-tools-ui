import { Component, OnInit, ViewChild } from '@angular/core';
import { Pagination } from './../../../../../tools-ui';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from '../../../../cores/services/theme.service';

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

    constructor(private http: HttpClient, public theme: ThemeService) { }

    ngOnInit() {

        this.theads = ['No.', '会员', '联系电话', '收货地址', '注册日期', '操作'];
        this.pagination.total = 1000;
        this.pageChanged();
    }

    pageChanged() {
        console.log(11);
        const apiUrl = `https://randomuser.me/api/?page=${this.pagination.page}&results=${this.pagination.limit}`;
        this.http.get(apiUrl).subscribe(res => {
            const response = <any>res;
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
