import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
} from '@angular/core';
import { Item } from './../../commons/interfaces/item.interface';
import { DomAttr, Color } from '../../commons/extends/attr.class';

@Component({
    selector: 'ts-selects',
    template: `
    <div tsDropdown class="w-100" [useItemClickClose]="false">
        <div tsToggle
            [class.custom-select-sm]="sm!==null"
            [class.custom-select-lg]="lg!==null"
            class="custom-select pointer">
            <span class="text-muted" *ngIf="activeItems.length<=0">{{placeholder}}</span>
            <span class="badge badge-success p-2 mr-1 no-select" *ngFor="let active of activeItems">
                <i (click)="setValue(active)" class="fa fa-fw fa-close"></i>
                {{active.text}}
            </span>
        </div>
        <div tsDropMenu [style.width]="'100%'">
            <div *ngFor="let item of items"
                (click)="setValue(item)"
                class="dropdown-item pointer no-select {{isActiveItem(item)?textClass:''}}">
                <div class="d-table w-100">
                    <div class="d-table-cell" [innerHTML]="item.content||item.text"></div>
                    <div class="d-table-cell text-right" *ngIf="isActiveItem(item)">
                        <i class="fa fa-fw fa-check"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    styles: [
        `.ts-select-item {
            max-height: 270px;
            overflow-y: auto;
        }
        .dropdown-item:after{
            text-align:center;
        }`
    ]
})
export class SelectsComponent extends DomAttr {

    @Input() disabled: boolean;
    @Input() items: Array<Item>;
    @Input() placeholder: string;
    @Input() values: any[];
    @Input() emptyLabel: string;

    @Output() valueChange = new EventEmitter<any>(false);
    @Output() optionChange = new EventEmitter<any>(false);

    title: string;
    searchKey: string;
    activeItems: Array<Item>;

    constructor() {
        super();
        this.color = Color.primary;
        this.disabled = false;
        this.placeholder = 'select...';
        this.searchKey = '';
        this.title = '';
        this.items = [];
        this.activeItems = [];
        this.emptyLabel = 'No results found.';
    }

    setValue(item: Item) {
        const index = this.activeItems.indexOf(item);
        if (index < 0) {
            this.activeItems.push(item);
        } else {
            this.activeItems.splice(index, 1);
        }
        this.values = this.activeItems.map<Item>(element => element.value);
        this.valueChange.emit(this.values);
        this.optionChange.emit(this.activeItems);
    }

    isActiveItem(item: Item): boolean {
        return this.activeItems.indexOf(item) >= 0;
    }
}
