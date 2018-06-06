import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { DomAttr } from './../../commons/extends/attr.class';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { defaultStyles } from './datas';

@Component({
    selector: 'ts-checkbox',
    template: `
        <span (click)="changeStatus()" class="pointer no-select {{textClass}}" [class.ts-check-disabled]="isDisabled">
            <i *ngIf="!checked" class="fa fa-square-o fa-fw fa-lg"></i>
            <i *ngIf="checked" class="fa fa-check-square fa-fw fa-lg"></i>
        </span>
        <span (click)="changeStatus()" class="pointer no-select" [class.ts-check-disabled]="isDisabled">{{label||''}}</span>`,
    styles: [defaultStyles],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CheckboxComponent),
        multi: true
    }]
})
export class CheckboxComponent extends DomAttr implements ControlValueAccessor {

    @Input() label: string;

    @Input() value: any;

    @Output() checkedChange = new EventEmitter<boolean>();

    checked: boolean;

    isDisabled: boolean;

    private innerValue: any[];

    changeHandle: (value: any) => {};

    touchedHandle: (value: any) => {};

    constructor() {
        super();
        this.checked = false;
        this.isDisabled = false;
        this.innerValue = [];
    }

    changeStatus() {
        if (this.isDisabled) { return; }
        this.checked = !this.checked;
        if (this.checked && !this.hasValue()) {
            this.innerValue.push(this.value);
        } else if (!this.checked && this.hasValue()) {
            const index = this.innerValue.indexOf(this.value);
            this.innerValue.splice(index, 1);
        }
        if (this.changeHandle) {
            this.changeHandle(this.innerValue.concat());
        }
        this.checkedChange.emit(this.checked);
    }

    writeValue(values: any[]) {
        this.innerValue = values || [];
        this.checked = this.hasValue();
    }

    private hasValue(): boolean {
        return this.innerValue.indexOf(this.value) >= 0
    }

    registerOnChange(fn: any) { this.changeHandle = fn; }

    registerOnTouched(fn: any) { this.touchedHandle = fn; }

    setDisabledState(isDisabled: boolean) { this.isDisabled = isDisabled; }

}
