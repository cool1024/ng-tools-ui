import { Component, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LoopCard, LoopCardConfig } from './loop-card.interface';

@Component({
    selector: 'ts-loop-card',
    template: `
    <div class="card rounded-0 p-2 d-inline-block m-1" style="width:20rem;">
        <input #file type="file" style="display:none" accept="image/*" (change)="changeFile($event.target.files)">
        <img (click)="file.click()" class="card-img-top pointer" [src]="realSrc||config.defaultBackground" style="height:10rem;width:100%;">
        <hr style="width:100%;" class="mt-2 mb-0">
        <div class="input-group input-group-sm mt-2">
            <div class="input-group-prepend">
                <span class="input-group-text bg-white">{{config.textTitle}}</span>
            </div>
            <input (ngModelChange)="loopCard.active=false"
            name="url" [(ngModel)]="loopCard.url" type="text" class="form-control" placeholder="请输入链接地址">
        </div>
        <div class="text-right mt-2">
            <span [class.d-none]="loopCard.active === true" class="pull-left badge badge-danger">{{config.warningTitle}}</span>
            <span [class.d-none]="loopCard.active !== true" class="pull-left badge badge-success">{{config.successTitle}}</span>
            <button (click)="save()" type="button" class="btn btn-sm btn-info">
                <i class="fa fa-check fa-fw"></i>{{config.saveTitle}}</button>
            <button (click)="remove()" type="button" class="btn btn-sm btn-danger">
                <i class="fa fa-close fa-fw"></i>{{config.removeTitle}}</button>
        </div>
    </div>`
})
export class LoopCardComponent {

    @Input() loopCard: LoopCard;
    @Input() config: LoopCardConfig;

    @Output() cardSave = new EventEmitter<LoopCard>();
    @Output() cardRemove = new EventEmitter<LoopCard>();

    get realSrc(): string | SafeResourceUrl {
        return typeof this.loopCard.src === 'string' ? (this.loopCard.src ? this.config.host + this.loopCard.src : '') : this.loopCard.src;
    }

    constructor(private sanitizer: DomSanitizer) {
        this.config = {
            host: '',
            saveTitle: 'Save',
            removeTitle: 'Remove',
            successTitle: 'success',
            warningTitle: 'warning',
            textTitle: 'Link',
            defaultBackground: '',
        };
    }

    changeFile(files: File[]) {
        if (files && files.length > 0) {
            this.loopCard.active = false;
            this.loopCard.file = files[0];
            this.loopCard.src = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(this.loopCard.file));
        }
    }

    save() {
        this.cardSave.emit(this.loopCard);
    }

    remove() {
        this.cardRemove.emit(this.loopCard);
    }
}
