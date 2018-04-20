import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UploadConfig } from './upload.interface';
import { DomAttr } from '../../commons/extends/attr.class';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'ts-video',
    template: `
    <div class="d-inline-block align-top">
        <input #input_file type="file" class="d-none"
            [attr.accept]="type+'/*'" (change)="changeFile($event.target.files);input_file.value=null">
        <div class="btn-group mb-1" role="group">
            <button [class]="btnClass" (click)="input_file.click()" type="button">
                <i class="fa fa-folder-open-o fa-fw fa-lg" aria-hidden="true"></i>{{title||'OpenFile'}}</button>
            <button *ngIf="useUpload&&!autoUpload" [class]="btnClass" (click)="tryUpload()" type="button">
                <i class="fa fa-upload fa-fw fa-lg" aria-hidden="true"></i>
            </button>
            <button [class]="btnClass" (click)="cleanInput()" type="button">
                <i class="fa fa-remove fa-fw" aria-hidden="true"></i>
            </button>
        </div>
        <br>
        <div *ngIf="showVideo&&!showLoading&&type!=='audio'"
            [style.width]="videoSize[0]" [style.height]="videoSize[1]" class="d-inline-block">
            <video class="m-0 p-0 rounded-0 border border-muted w-100 h-100" [src]="realSrc" controls="true"></video>
        </div>
        <div *ngIf="showVideo&&!showLoading&&type==='audio'"
            [style.width]="videoSize[0]" [style.height]="videoSize[1]" class="border border-muted d-inline-block">
            <audio class="m-0 p-0 rounded-0 w-100" [src]="realSrc" controls="true"></audio>
        </div>
        <div *ngIf="showLoading"
            [style.width]="videoSize[0]" [style.width]="videoSize[0]" [style.height]="videoSize[1]" class="d-inline-block">
            <div class="w-100 h-100">
                <div class="progress w-100 d-inline-block">
                    <div class="progress-bar bg-{{color}} progress-bar-striped progress-bar-animated" [style.width]="loaded">
                        {{loaded}}
                    </div>
                </div>
            </div>
        </div>
    </div>`,
})
export class InputVideoComponent extends DomAttr implements OnChanges {

    @Input() src: string | SafeResourceUrl;

    @Input() videoSize: [string, string];

    @Input() title: string;

    @Input() type: string;

    @Input() autoUpload: boolean;

    @Input() useUpload: boolean;

    @Input() config: UploadConfig;

    @Output() fileChange = new EventEmitter<File>();

    @Output() srcChange = new EventEmitter<string>();

    showVideo = false;

    showLoading = false;

    hasUpload = false;

    loaded = '0%';

    file: File;

    subscription: Subscription;

    get source(): string { return this.config ? (this.config.host || '') : ''; }

    get realSrc(): string | SafeResourceUrl { return typeof this.src === 'string' ? this.source + this.src : this.src; }

    constructor(private sanitizer: DomSanitizer) {
        super();
        this.type = 'video';
        this.videoSize = ['250px', '180px'];
        this.autoUpload = false;
        this.useUpload = false;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.src && changes.src.currentValue) {
            this.showVideo = true;
            this.src = !changes.src.firstChange ? changes.src.currentValue : this.src;
        }
    }

    changeFile(files: File[]) {
        if (files.length > 0) {
            this.file = files[0];
            this.fileChange.emit(files[0]);
            this.src = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(files[0]));
            this.showVideo = true;
            this.hasUpload = false;
            this.showLoading = false;
            if (!!this.config && this.config.progresser && !this.useUpload) {
                this.tryUpload();
            }
        }
    }

    cleanInput() {
        if (this.showLoading && this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
            this.showLoading = false;
        } else {
            this.src = '';
            this.showVideo = false;
            this.hasUpload = true;
            this.file = null;
            this.fileChange.emit(null);
        }

    }

    tryUpload() {
        if (this.hasUpload === true) { return; }
        if (this.file === null || this.file === undefined) { return; }
        this.hasUpload = true;
        this.loaded = '0%';
        this.subscription = this.config.progresser(this.file).subscribe(res => {
            if (typeof res === 'string') {
                this.src = res;
                this.showLoading = false;
                this.srcChange.emit(res);
            } else {
                this.loaded = res + '%';
            }
        });
        this.showLoading = true;
    }
}
