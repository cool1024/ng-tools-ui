
import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter, ViewChildren } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { DomAttr } from '../../commons/extends/attr.class';
import { UploadConfig } from './upload.interface';
import { styleStr, plusSvgData } from './upload.data';

@Component({
    selector: 'ts-image',
    template: `
    <div class="d-inline-block">
        <input #input_file class="d-none" type="file" accept="image/*" (change)="changeFile($event.target.files);input_file.value=null">
        <div class="btn-group" role="group">
            <button [class]="btnClass" (click)="input_file.click()" type="button">
                <i class="fa fa-file-image-o fa-fw" aria-hidden="true"></i>{{title||'Open File'}}</button>
            <button [class]="btnClass" (click)="resetInput(input_file)" type="button">
                <i class="fa fa-refresh fa-fw" aria-hidden="true"></i>
            </button>
            <button [class]="btnClass" (click)="cleanInput(input_file)" type="button">
                <i class="fa fa-remove fa-fw" aria-hidden="true"></i>
            </button>
        </div>
        <br>
        <div *ngIf="!((!showImage&&!src)||isLoading)"
            [style.width]="width" [style.height]="width" class="img-thumbnail img-thumbnail-pad d-inline-block mt-2 mr-2 rounded-0">
            <div class="w-100 h-100 img-thumbnail-image" [ngStyle]="{'background-image': getUrl()}"></div>
        </div>
        <div *ngIf="((!showImage&&!src)&&!isLoading)"
            (click)="input_file.click()"
            [style.width]="width" [style.height]="width"
            [style.backgroundImage]="plusBackground"
            class="pointer ts-plus-dom img-thumbnail img-thumbnail-pad d-inline-block mt-2 mr-2 rounded-0">
            <div class="w-100 h-100 img-thumbnail-image"></div>
        </div>
        <div *ngIf="isLoading"
            class="img-thumbnail img-thumbnail-pad d-inline-block mt-2 mr-2 rounded-0" [style.width]="width" [style.height]="width">
            <div class="typing_loader"></div>
        </div>
    </div>`,
    styles: [styleStr]
})

export class InputImageComponent extends DomAttr implements OnChanges {

    @Input() config: UploadConfig;
    @Input() src: string | { blobUrl: string };
    @Input() title: string;
    @Input() width: string;

    @Output() fileChange = new EventEmitter<File>(false);
    @Output() srcChange = new EventEmitter<string>(false);

    showImage = false;
    isLoading = false;
    hasUpload = true;
    default: string;
    file: File;

    get plusBackground(): SafeStyle {
        return this.domSanitizer.bypassSecurityTrustStyle(`url(${plusSvgData})`);
    }

    get source(): string { return this.config ? (this.config.host || '') : ''; }

    get realSrc(): string {
        return typeof this.src === 'string' ? this.source + this.src : this.src.blobUrl;
    }

    constructor(private domSanitizer: DomSanitizer) {
        super();
        this.width = '130px';
        this.default = '';
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
                this.uploadFile();
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
