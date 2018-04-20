import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, HostBinding } from '@angular/core';
import { Item } from './../../commons/interfaces/item.interface';
import { DomAttr } from '../../commons/extends/attr.class';

@Component({
    selector: 'ts-dropdown',
    template: `
    <div tsDropdown [dropup]="dropup">
        <button *ngIf="diyClass" [class]="diyClass" type="button" tsToggle>{{item ? item.text : text}}</button>
        <button *ngIf="!diyClass"
            tsToggle tsBtn
            class="dropdown-toggle {{this.page!==null?pageClass:''}}"
            [lg]="lg"
            [sm]="sm"
            [outline]="outline"
            [color]="color">{{item ? item.text : text}}</button>
        <div tsDropMenu>
            <button [class.active]="item.value === value"
                    class="dropdown-item pointer"
                    *ngFor="let item of itemList; trackBy: trackByValue"
                    (click)="itemClick(item)">{{item.text}}</button>
        </div>
    </div>
    `,
    styles: [
        `.btn-page-primary,
        .btn-page-secondary,
        .btn-page-success,
        .btn-page-danger,
        .btn-page-warning,
        .btn-page-info,
        .btn-page-dark{
            border-color: #eee;
        }

        .btn-page-primary.disabled:hover,
        .btn-page-secondary.disabled:hover,
        .btn-page-success.disabled:hover,
        .btn-page-danger.disabled:hover,
        .btn-page-warning.disabled:hover,
        .btn-page-info.disabled:hover,
        .btn-page-dark.disabled:hover{
            border-color: #eee !important;
        }

        .btn-page-primary:hover {
            border-color: #007bff !important;
        }
        .btn-page-secondary:hover {
            border-color: #6c757d !important;
        }
        .btn-page-success:hover {
            border-color: #28a745 !important;
        }
        .btn-page-danger:hover {
            border-color: #dc3545 !important;
        }
        .btn-page-warning:hover {
            border-color: #ffc107 !important;
        }
        .btn-page-info:hover {
            border-color: #17a2b8 !important;
        }
        .btn-page-dark:hover {
            border-color: #343a40 !important;
        }`
    ]
})
export class DropdownComponent extends DomAttr implements OnChanges {

    item: Item;

    @Input() page: string;

    @Input() text: string;

    @Input() value: any;

    @Input() items: any[];

    @Input() diyClass: string;

    @Input() dropup: string;

    @Input() useNumber: number;

    @Output() valueChange = new EventEmitter<any>();

    @Output() itemChange = new EventEmitter<Item>();

    get itemList(): Item[] {
        const items = new Array<any>();
        // just need some number value
        if (this.useNumber >= 0) {
            this.items.some((item, index) => {
                if (typeof item === 'string') {
                    items.push({ value: this.useNumber + index, text: item });

                } else if (typeof item === 'number') {
                    items.push({ value: this.useNumber + item, text: item.toString() });
                } else {
                    console.error('useNumber >= 0,items element must be a string or number', item);
                    return false;
                }
            });
        } else {
            // diy item value
            this.items.forEach(item => {
                items.push(typeof item === 'string' || typeof item === 'number' ? { value: item, text: item } : item);
            });
        }
        return items;
    }

    get pageClass() {
        return `btn-page-${this.color}`;
    }

    constructor() {
        super();
        this.items = [];
        this.diyClass = null;
        this.dropup = null;
        this.page = null;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.value) {
            const items = this.itemList;
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === changes.value.currentValue) {
                    this.item = items[i];
                }
            }
        }
    }

    itemClick(item: Item) {
        this.item = item;
        this.valueChange.emit(item.value);
        this.itemChange.emit(item);
    }

    trackByValue(index: number, item: Item): number { return item.value; }
}
