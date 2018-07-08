import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { DomAttr } from './../../commons/extends/attr.class';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { defaultStyles } from './datas';

@Component({
    selector: 'ts-radio',
    template: `
    <span (click)="changeStatus()" class="pointer no-select {{textClass}}" [class.ts-check-disabled]="isDisabled">
        <i *ngIf="!checked" class="fa fa-circle-o fa-fw fa-lg"></i>
        <i *ngIf="checked" class="fa fa-dot-circle-o fa-fw fa-lg"></i>
    </span>
    <span (click)="changeStatus()" class="pointer no-select" [class.ts-check-disabled]="isDisabled">{{label||''}}</span>`,
    styles: [defaultStyles],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => RadioComponent),
        multi: true
    }]
})
export class RadioComponent extends DomAttr implements ControlValueAccessor {

    // radio文本标签
    @Input() label: string;

    // radio选中时的值
    @Input() value: any;

    // radio被选中状态变更时触发
    @Output() checkedChange = new EventEmitter<boolean>(false);

    // radio是否被选中
    checked: boolean;

    isDisabled: boolean;

    changeHandle: (value: any) => {};

    touchedHandle: (value: any) => {};

    constructor() {
        super();
        this.checked = false;
        this.isDisabled = false;
    }

    changeStatus() {
        if (this.checked || this.isDisabled) { return; }
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
        if (this.changeHandle && this.checked) {
            this.changeHandle(this.value);
        }
    }

    writeValue(value: any) { this.checked = value === this.value; }

    registerOnChange(fn: any) { this.changeHandle = fn; }

    registerOnTouched(fn: any) { this.touchedHandle = fn; }

    setDisabledState(isDisabled: boolean) { this.isDisabled = isDisabled; }
}
