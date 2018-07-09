import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu.interface';
import { DomAttr } from '../../commons/extends/attr.class';

@Component({
    selector: `ts-menu-push`,
    exportAs: 'tsMenuPush',
    template: `<div class="mb-0">
        <button  *ngFor="let item of items;index as i"
            (click)="goItem(item,index)"
            class="{{btnClass}} btn-sm badge-pill ml-1 {{item.active?activeClass:''}}">{{item.title}}
        </button>
    </div>`,
})
export class MenuPushComponent extends DomAttr {

    @Input() items: MenuItem[];

    @Input() activeClass: string;

    @Output() itemClick = new EventEmitter<MenuItem>();

    constructor() {
        super();
        this.items = new Array<MenuItem>();
        this.activeClass = 'active';
    }

    goItem(item: MenuItem, index: number) {
        this.items.forEach(e => {
            if (e !== item) {
                e.active = false;
            }
        });
        item.active = true;
        this.itemClick.emit(item);
    }
}
