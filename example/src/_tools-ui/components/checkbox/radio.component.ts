import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DomAttr } from './../../commons/extends/attr.class';

@Component({
    selector: 'ts-radio',
    template: `
    <span (click)="changeStatus()" class="pointer {{textClass}}">
        <i *ngIf="!checked" class="fa fa-circle-o fa-fw fa-lg"></i>
        <i *ngIf="checked" class="fa fa-dot-circle-o fa-fw fa-lg"></i>
    </span>
    <span (click)="changeStatus()" class="pointer">{{label||''}}</span>`,
})
export class RadioComponent extends DomAttr implements OnDestroy {

    // radio文本标签
    @Input() label: string;

    // radio选中时的值
    @Input() value: any;

    // radio是否被选中
    @Input() checked: boolean;

    // radio被选中状态变更时触发
    @Output() checkedChange = new EventEmitter<boolean>(false);

    // radio状态变更的绑定handle
    @Output() groupHandle = new EventEmitter<{ checked: boolean, value?: any }>(false);

    constructor() {
        super();
        this.checked = false;
    }

    changeStatus() {
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
        this.groupHandle.emit({ checked: this.checked, value: this.value });
    }

    ngOnDestroy() {
        this.groupHandle.emit({ checked: this.checked });
    }
}
