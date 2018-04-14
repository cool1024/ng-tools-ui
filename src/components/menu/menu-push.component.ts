import { Component, Input, Output, DoCheck, EventEmitter } from '@angular/core';
import { MenuItem } from './menu.interface';
import { DomAttr } from '../../commons/extends/attr.class';

@Component({
    selector: `ts-menu-push`,
    exportAs: 'tsMenuPush',
    template: `<h3>
        <button *ngFor="let item of items;index as i" class="{{btnClass}} btn-sm badge-pill ml-1">
            <span (click)="goItem(item)">{{item.title}}</span>
            <span (click)="removeItem(i)">x</span>
        </button>
    </h3>`,
    styles: [
        ``,
    ]
})
export class MenuPushComponent extends DomAttr implements DoCheck {

    @Input() items: MenuItem[];

    @Input() max: number;

    @Output() itemClick = new EventEmitter<MenuItem>();

    constructor() {
        super();
        this.items = new Array<MenuItem>();
        this.max = 5;
    }

    ngDoCheck() {
        if (this.items.length > this.max) {
            this.items.shift();
        }
    }

    goItem(item: MenuItem) {
        this.itemClick.emit(item);
    }

    removeItem(index: number) {
        this.items.splice(index, 1);
    }
}
