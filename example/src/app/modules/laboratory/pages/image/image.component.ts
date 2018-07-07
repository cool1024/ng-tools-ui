/**
 * 图片页面
 *
 * @author xiaojian
 * @file   image.component.ts
 * @date   2018-6-26 21:39:54
 */
import { Component, OnInit } from '@angular/core';
import { WindowService } from 'ng-tools-ui';
import { ClipComponent } from '../../windows/clip/clip.component';

@Component({
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

    constructor(private window: WindowService) { }

    ngOnInit() {

    }

    showClipWindow(files: File[]) {
        if (files.length > 0) {
            const window = this.window.push(ClipComponent);
            window.instance.file = files[0];
            window.present();
        }
    }
}
