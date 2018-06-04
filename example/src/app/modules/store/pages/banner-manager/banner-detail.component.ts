import { Component, OnInit } from '@angular/core';
import { Banner } from '../../interfaces/banner.interface';
import { ModalService } from 'ng-tools-ui';

@Component({
    template: `
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">幻灯片</h5>
            <button (click)="modal.dismiss()" type="button" class="close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <img class="w-100" [src]="banner.bannerSrc">
            <div class="input-group mt-2">
                <div class="input-group-prepend">
                    <span class="input-group-text bg-white">链接</span>
                </div>
                <input [(ngModel)]="banner.bannerLink" type="text" class="form-control" placeholder="请输入幻灯片链接">
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-white">
                <i class="fa fa-fw fa-file-picture-o"></i>选择图片
            </button>
            <button tsBtn loading (submit)="confirmSave($event)" color="success">确认保存</button>
        </div>
    </div>`,
})
export class BannerDetailComponent {

    banner: Banner;

    constructor(
        public modal: ModalService,
    ) { }

    confirmSave(btn: any) {
        this.modal.close();
    }
}
