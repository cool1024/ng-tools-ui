/**
 * 加载动画页面
 *
 * @author xiaojian
 * @file   loading.component.ts
 * @date   2018-6-26 21:47:20
 */
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

    showCssload = true;

    showTableLoad = false;

    constructor() { }

    ngOnInit() {

    }
}
