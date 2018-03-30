import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DomAttr } from './../../commons/extends/attr.class';

@Component({
    selector: 'ts-checkbox',
    template: `
        <span (click)="changeStatus()" class="pointer {{textClass}}">
            <i *ngIf="!checked" class="fa fa-square-o fa-fw fa-lg"></i>
            <i *ngIf="checked" class="fa fa-check-square fa-fw fa-lg"></i>
        </span>
        <span (click)="changeStatus()" class="pointer">{{label||''}}</span>`,
})
export class CheckboxComponent extends DomAttr implements OnDestroy {

    @Input() label: string;
    @Input() value: any;
    @Input() checked: boolean;
    @Output() checkedChange = new EventEmitter<boolean>();
    @Output() groupHandle = new EventEmitter<void>();
    constructor() {
        super();
        this.checked = false;
    }

    changeStatus() {
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
        this.groupHandle.emit();
    }

    ngOnDestroy() {
        this.checked = false;
        this.groupHandle.emit();
    }

}
