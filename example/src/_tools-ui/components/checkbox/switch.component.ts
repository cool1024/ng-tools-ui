import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { DomAttr } from '../../commons/extends/attr.class';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'ts-switch',
    template: `
    <span class="d-inline-block triggle-line no-select text-left {{isOpen?bgClass:'bg-secondary'}}" (click)="toggle()">
        <span class="d-inline-block rounded-circle triggle-bar bg-white align-top no-select"
        [ngClass]="{'triggle-open':isOpen,'triggle-close':!isOpen}"></span>
    </span>`,
    styles: [
        `.triggle-bar {
            height: 17px;
            width: 17px;
        }
        .triggle-line {
            height: 21px;
            width: 35px;
            padding: 2px;
            border-radius: 30px;
            cursor: pointer;
            vertical-align: top;
        }
        .triggle-open {
            transition: all 0.3s linear;
            margin-left: 14px;
        }
        .triggle-close {
            transition: all 0.3s linear;
            margin-left: 0px;
        }`
    ],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SwitchComponent),
        multi: true
    }]
})
export class SwitchComponent extends DomAttr implements ControlValueAccessor {

    @Input() values: { open: any, close: any };

    // @Input() value: any;

    // @Output() valueChange = new EventEmitter<any>(false);

    private value: any;

    applyChange: (value: any) => void;


    constructor() {
        super();
        this.values = { open: true, close: false };
        this.value = false;
    }

    writeValue(value: any) { this.value = value; }

    registerOnChange(fn: any): void { this.applyChange = fn; }

    registerOnTouched(fn: any): void { }

    get isOpen(): boolean { return this.value === this.values.open; }

    toggle() {
        this.value = this.isOpen ? this.values.close : this.values.open;
        this.applyChange(this.value);
        // this.valueChange.emit(this.value);
    }

}
