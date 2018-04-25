import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomAttr } from '../../commons/extends/attr.class';

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
    ]
})
export class SwitchComponent extends DomAttr {

    @Input() values: { open: any, close: any };

    @Input() value: any;

    @Output() valueChange = new EventEmitter<any>(false);

    constructor() {
        super();
        this.values = { open: true, close: false };
        this.value = false;
    }

    get isOpen(): boolean {
        return this.value === this.values.open;
    }

    toggle() {
        this.value = this.isOpen ? this.values.close : this.values.open;
        this.valueChange.emit(this.value);
    }

}
