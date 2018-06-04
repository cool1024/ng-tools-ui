import { Component, OnInit } from '@angular/core';
import { Banner } from '../../interfaces/banner.interface';
import { ModalService } from 'ng-tools-ui';
import { BannerDetailComponent } from './banner-detail.component';

@Component({
    templateUrl: './banner-manager.component.html',
    styleUrls: ['./banner-manager.component.scss']
})
export class BannerManagerComponent implements OnInit {

    theads = ['序号', '图片', '链接', '操作'];

    list = new Array<Banner>();

    loading = false;

    constructor(
        private modal: ModalService
    ) { }

    ngOnInit() {
        this.loadDatas();
    }

    loadDatas() {
        this.loading = true;
        this.list = [
            { id: 1, bannerSrc: 'https://cool1024.com/ng/assets/image/card/1.jpg', bannerLink: 'https://cool1024.com/ng/assets' },
            { id: 2, bannerSrc: 'https://cool1024.com/ng/assets/image/card/2.jpg', bannerLink: 'https://cool1024.com/ng/assets' },
            { id: 3, bannerSrc: 'https://cool1024.com/ng/assets/image/card/3.jpg', bannerLink: 'https://cool1024.com/ng/assets' },
            { id: 4, bannerSrc: 'https://cool1024.com/ng/assets/image/card/4.jpg', bannerLink: 'https://cool1024.com/ng/assets' },
        ];
    }

    confirmDelete(banner: Banner) {

    }

    showEditModal(banner: Banner) {
        const modal = this.modal.create(BannerDetailComponent, { center: true });
        modal.instance.banner = banner;
        modal.open();
    }

}
