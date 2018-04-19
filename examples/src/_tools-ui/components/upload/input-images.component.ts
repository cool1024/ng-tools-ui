import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { UploadConfig } from './upload.interface';
import { InputImages } from './input-images.class';
import { DomAttr } from '../../commons/extends/attr.class';
import { styleStr, plusSvgData } from './upload.data';

@Component({
    selector: 'ts-images',
    template: `
    <div class="d-inline-block">
    <input #input_file type="file"
    class="d-none" accept="image/*" multiple="multiple" (change)="changeFile($event.target.files);input_file.value=null">
    <div class="btn-group" role="group">
        <button type="button" [class]="btnClass" (click)="input_file.click()">
            <i class="fa fa-file-image-o fa-fw" aria-hidden="true"></i>{{title||'Open File'}}</button>
        <button type="button" [class]="btnClass" (click)="resetInput(input_file)">
            <i class="fa fa-refresh fa-fw" aria-hidden="true"></i>
        </button>
    </div>
    <br>
    <div *ngFor="let item of images.list;index as i"
        [style.width]="width" [style.height]="width" class="img-thumbnail img-thumbnail-pad d-inline-block mt-2 mr-2 rounded-0">
        <span *ngIf="!item.uploading" class="close text-danger" (click)="removeImage(i)">&times;</span>
        <div *ngIf="!item.uploading" class="w-100 h-100 img-thumbnail-image" [ngStyle]="{'background-image': getUrl(item)}"></div>
        <div *ngIf="item.uploading" class="span mt-2 w-100 h-100">
            <div class="typing_loader"></div>
        </div>
    </div>
    <div *ngIf="images.list.length<=0"
        (click)="input_file.click()" class="pointer ts-plus-dom img-thumbnail img-thumbnail-pad d-inline-block mt-2 mr-2 rounded-0"
        [style.width]="width" [style.height]="width" [style.backgroundImage]="plusBackground">
    </div>
</div>`,
    styles: [styleStr]
})
export class InputImagesComponent extends DomAttr implements OnChanges {

    @Input() src: string;
    @Input() title: string;
    @Input() config: UploadConfig;
    @Input() width: string;

    @Output() srcChange = new EventEmitter<string>(false);
    @Output() fileChange = new EventEmitter<File[]>(false);
    @Output() deleteChange = new EventEmitter<any>(false);

    images = new InputImages();
    uploading = false;
    default: string;

    get plusBackground(): SafeStyle {
        return this.domSanitizer.bypassSecurityTrustStyle(`url(${plusSvgData})`);
    }

    constructor(
        private domSanitizer: DomSanitizer
    ) {
        super();
        this.src = '';
        this.config = { host: '' };
        this.default = '';
        this.width = '130px';
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!this.uploading) {
            this.images = new InputImages(this.src);
            if (changes.src && !this.default) { this.default = changes.src.currentValue; }
        }
    }

    changeFile(files: File[]) {
        for (let i = 0; i < files.length; i++) {
            const url = window.URL.createObjectURL(files[i]);
            this.images.push({ type: 'file', file: files[i], url, uploading: !!this.config.uploader });
            this.fileChange.emit(files);
        }
        if (this.config.uploader) { this.uploadImage(); }
    }

    getUrl(image: { type: string, file: File, url: string, uploading: boolean }) {
        if (image.type === 'file') {
            return `url(${image.url})`;
        } else {
            return `url(${image.url ? this.config.host + image.url : ''}`;
        }
    }

    removeImage(index: number) {
        this.deleteChange.emit(this.images.list[index]);
        this.images.remove(index);
        this.srcChange.emit(this.images.urls.join());
    }

    uploadImage() {
        const fileItems = this.images.fileItems;
        let cx = 0;
        this.uploading = true;
        for (let i = 0; i < fileItems.length; i++) {
            this.config.uploader(fileItems[i].file).subscribe(res => {
                fileItems[i].type = 'url';
                fileItems[i].uploading = false;
                fileItems[i].file = null;
                fileItems[i].url = res;
                this.srcChange.emit(this.images.urls.join());
                if (++cx === fileItems.length) { this.uploading = false; }
            });
        }
    }

    resetInput(input: HTMLInputElement) {
        this.src = this.default;
        this.images = new InputImages(this.src);
        input.value = '';
        this.uploading = false;
        this.srcChange.emit(this.images.urls.join());
    }
}
