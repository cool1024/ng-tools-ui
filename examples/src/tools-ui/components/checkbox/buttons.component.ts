import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DomAttr } from './../../commons/extends/attr.class';


@Component({
    selector: 'ts-btns',
    template: `
    <div class="btn-group" role="group" aria-label="Basic example">
        <button (click)="toggle(btn)"
        *ngFor="let btn of buttons"
        type="button"
        [class]="btnClass+(isActive(btn.value)?'active':'')"
        [innerHTML]="btn.content"></button>
    </div>
    `,
})
export class ButtonsComponent extends DomAttr {

    @Input() items: { value: any, content: string }[];

    @Input() value: any | any[];

    @Output() valueChange = new EventEmitter<any | any[]>();

    @Input() multi: boolean;

    constructor(private domSanitizer: DomSanitizer) {
        super();
        this.multi = false;
        this.items = new Array<{ value: any, content: string }>();
    }

    get buttons(): { value: any, content: SafeHtml }[] {
        return this.items.map<{ value: any, content: SafeHtml }>(btn => {
            return {
                value: btn.value,
                content: this.domSanitizer.bypassSecurityTrustHtml(btn.content)
            };
        });
    }

    toggle(btn: { value: any, content: SafeHtml }) {
        if (this.isActive(btn.value)) {
            this.multi ? this.removeMutiValue(btn.value) : this.value = null;
        } else {
            this.multi ? this.value.push(btn.value) : this.value = btn.value;
        }
        this.valueChange.emit(this.multi ? this.value.concat() : this.value);
    }

    removeMutiValue(value: any) {
        if (this.value && this.value instanceof Array) {
            const index = this.value.indexOf(value);
            if (index >= 0) {
                this.value.splice(index, 1);
            }
        }
    }

    isActive(value: any): boolean {
        return this.multi ? this.multiActive(value) : this.value === value;
    }

    multiActive(value: any): boolean {
        return (this.value && this.value instanceof Array) ? this.value.indexOf(value) >= 0 : false;
    }

}
