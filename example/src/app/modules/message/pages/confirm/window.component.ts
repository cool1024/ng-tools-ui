/**
 * 示例窗口
 *
 * @author xiaojian
 * @file   window.component.ts
 * @date   2018-6-26 14:19:27
 */
import { Component, OnInit } from '@angular/core';
import { WindowViewService } from 'ng-tools-ui';

@Component({
    template: `
    <div class="bg-light h-100">
        <nav class="navbar navbar-light bg-white source-view-header position-absolute w-100">
            <span class="navbar-brand">这是一个窗口</span>
            <div>
                <span (click)="view.close()" class="text-muted text-danger-hover pointer">
                    <i class="fa fa-times mr-2" aria-hidden="true"></i>关闭
                </span>
            </div>
        </nav>
        <div class="h-100">

            <!--窗口内容-->

        </div>
    </div>`
})
export class WindowComponent implements OnInit {

    constructor(public view: WindowViewService) { }

    ngOnInit() {

    }
}
