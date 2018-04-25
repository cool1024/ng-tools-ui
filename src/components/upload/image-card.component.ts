
import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter, ViewChildren } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { DomAttr } from '../../commons/extends/attr.class';
import { UploadConfig } from './upload.interface';
import { styleStr, plusSvgData } from './upload.data';

@Component({
    selector: 'ts-image-card',
    template: `
    <div class="d-inline-block rounded border border-muted p-1 mb-1 align-top" [ngStyle]="blockStyle">
        <input #input_file class="d-none" type="file" accept="image/*" (change)="changeFile($event.target.files);input_file.value=null">
        <div  *ngIf="!((!showImage&&!src)||isLoading)" class="w-100 h-100 upload-block" [ngStyle]="{'background-image': getUrl()}">
            <div class="upload-block-window text-white text-center h-100 w-100" [ngStyle]="windowStyle">
                <!--<i class="fa fa-fw fa-lg fa-eye pointer"></i>-->
                <i (click)="cleanInput(input_file)" class="fa fa-fw fa-lg fa-trash pointer"></i>
            </div>
        </div>
        <div *ngIf="(!showImage&&!src)&&!isLoading" (click)="input_file.click()" class="w-100 h-100 upload-block">
            <div class="text-muted text-center h-100 w-100 pointer" [ngStyle]="windowStyle">
                <i class="fa fa-fw fa-lg fa-picture-o"></i>{{title}}
            </div>
        </div>
        <div *ngIf="isLoading" class="w-100 h-100">
            <div class="typing_loader"></div>
        </div>
    </div>`,
    styles: [styleStr]
})

export class ImageCardComponent extends DomAttr implements OnChanges {

    @Input() config: UploadConfig;
    @Input() src: string | { blobUrl: string };
    @Input() title: string;
    @Input() width: number;

    @Output() fileChange = new EventEmitter<File>(false);
    @Output() srcChange = new EventEmitter<string>(false);

    showImage = false;
    isLoading = false;
    hasUpload = true;
    default: string;
    file: File;

    get source(): string { return this.config ? (this.config.host || '') : ''; }

    get query(): string { return this.config ? (this.config.queryString || '') : ''; }

    get realSrc(): string {
        return typeof this.src === 'string' ? this.source + this.src + this.query : this.src.blobUrl;
    }

    get sizePx(): string {
        return this.width + 'px';
    }

    get blockStyle(): any {
        return { height: this.sizePx, width: this.sizePx };
    }

    get windowStyle(): any {
        return { lineHeight: (this.width - 7) + 'px' };
    }

    constructor(private domSanitizer: DomSanitizer) {
        super();
        this.width = 130;
        this.default = '';
        this.title = 'Click...';
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.src && !this.default) { this.default = changes.src.currentValue; }
    }

    getUrl() {
        return `url(${this.realSrc})`;
    }

    changeFile(files: File[]) {
        this.hasUpload = false;
        this.isLoading = false;
        this.file = files[0];
        if (files.length > 0) {
            this.fileChange.emit(files[0]);
            this.src = { blobUrl: window.URL.createObjectURL(files[0]) };
            this.showImage = true;
            if (!!this.config) {
                console.log(111);
                if (this.config.uploader) { this.uploadFile(); }
            }
        }
    }

    resetInput(input: HTMLInputElement) {
        this.showImage = false;
        this.isLoading = false;
        this.hasUpload = true;
        this.file = null;
        input.value = '';
        this.src = this.default || '';
        this.srcChange.emit(this.src);
    }

    cleanInput(input: HTMLInputElement) {
        this.src = '';
        this.showImage = false;
        this.isLoading = false;
        this.hasUpload = true;
        this.file = null;
        input.value = '';
        this.srcChange.emit(this.src);
    }

    uploadFile() {
        if (this.hasUpload === true) { return; }
        if (this.file === null || this.file === undefined) { return; }
        this.hasUpload = true;
        this.isLoading = true;
        if (this.config.uploader !== undefined || this.config.uploader !== null) {
            this.config.uploader(this.file).subscribe(src => {
                this.isLoading = false;
                this.src = src;
                this.srcChange.emit(src);
            });
        }
    }
}
