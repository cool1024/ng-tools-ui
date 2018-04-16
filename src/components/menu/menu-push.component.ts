import { Component, Input, Output, DoCheck, EventEmitter } from '@angular/core';
import { MenuItem } from './menu.interface';
import { DomAttr } from '../../commons/extends/attr.class';

@Component({
    selector: `ts-menu-push`,
    exportAs: 'tsMenuPush',
    template: `<h3>
        <button (click)="goItem(item)"
             *ngFor="let item of _items;index as i" class="{{btnClass}} btn-sm badge-pill ml-1" [class.active]="item.active">
            <span>{{item.title}}</span>
            <!--<span (click)="removeItem(i)">x</span>-->
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

    _items: MenuItem[];

    constructor() {
        super();
        this.items = new Array<MenuItem>();
        this.max = 5;
    }

    ngDoCheck() {
        this._items = Array.from(new Set(this.items));
        if (this._items.length > this.max) {
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
