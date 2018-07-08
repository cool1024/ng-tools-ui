/**
 * 图片页面
 *
 * @author xiaojian
 * @file   image.component.ts
 * @date   2018-6-26 21:39:54
 */
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { WindowService } from 'ng-tools-ui';
import { ClipComponent } from '../../windows/clip/clip.component';
import { UploadConfig } from 'ng-tools-ui';
import { GoodsService } from '../../../store/services/goods.service';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss'],
    providers: [GoodsService]
})
export class ImageComponent {

    clipImg: SafeResourceUrl;

    options: UploadConfig;

    image: string;

    constructor(
        private window: WindowService,
        private domSanitizer: DomSanitizer,
        private goodsService: GoodsService,
    ) {
        this.options = {
            queryString: '?x-oss-process=image/resize,h_130,w_130',
            uploader: (file: File) => {
                return this.showClipAndUpload(file);
            }
        };
    }

    /**
     * 图片裁剪示例
     * @param files 选择的文件列表
     */
    showClipWindow(files: File[]) {
        if (files.length > 0) {
            const win = this.window.push(ClipComponent);
            win.instance.file = files[0];
            win.present().subscribe(file => {
                if (file) {
                    this.clipImg = this.domSanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(file));
                }
            });
        }
    }

    /**
     * 图片裁剪上传示例
     * @param file 要上传的文件对象
     */
    showClipAndUpload(file: File) {
        const win = this.window.push(ClipComponent);
        win.instance.file = file;
        return win.present().pipe(
            // 如果取消了裁剪（直接关闭裁剪窗口，那么应该把原来的图传递回去（如果原来没有图那么默认为''））
            switchMap(clipFile => clipFile ? this.goodsService.uploadGoodsImage(clipFile) : of(this.image || ''))
        );
    }
}
