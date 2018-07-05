/**
 * 请编写窗口文件说明
 *
 * @author 填写作者
 * @file   folder.component.ts
 * @date   2018-7-5 21:15:57
 */
import { Component, OnInit } from '@angular/core';
import { WindowViewService } from 'ng-tools-ui';

@Component({
    templateUrl: './folder.component.html',
    styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

    constructor(public view: WindowViewService) { }

    ngOnInit() {

    }
}
