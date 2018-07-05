/**
 * 文件管理示例
 *
 * @author xiaojian
 * @file   example.component.ts
 * @date   2018-7-5 21:11:39
 */
import { Component, OnInit } from '@angular/core';
import { WindowService } from 'ng-tools-ui';
import { FolderComponent } from '../../windows/folder/folder.component';

@Component({
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

    constructor(private window: WindowService) { }

    ngOnInit() {

    }

    showManagerWindow() {
        const window = this.window.push(FolderComponent);
        window.present();
    }
}
