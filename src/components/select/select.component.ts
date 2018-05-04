import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    forwardRef,
} from '@angular/core';
import { Item } from './../../commons/interfaces/item.interface';
import { DomAttr, Color } from '../../commons/extends/attr.class';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'ts-select',
    template: `
    <div tsDropdown class="w-100">
        <input tsToggle
            [attr.readonly]="readonly"
            [class.custom-select-sm]="sm!==null"
            [class.custom-select-lg]="lg!==null"
            [(ngModel)]="title" (ngModelChange)="setSearchKey($event)" class="custom-select border-0 pointer" type="text"
            [placeholder]="placeholder">
        <div (displayChange)="setReadonlyStatus($event)" tsDropMenu [style.width]="'100%'">
            <div class="ts-select-item pointer border-none">
                <div *ngFor="let item of itemsList;trackBy: trackByValue"
                     class="dropdown-item {{showActiveClass(item)}}"
                     (click)="setValue(item)"
                     [innerHTML]="item.content||item.text">
                </div>
                <div *ngIf="itemsList.length<=0" class="text-muted text-center">{{emptyLabel}}</div>
            </div>
        </div>
    </div>`,
    styles: [
        `.ts-select-item {
            max-height: 270px;
            overflow-y: auto;
        }
        .dropdown-item:hover,
        .dropdown-item:focus{
            background: #f8f9fa;
        }
        .dropdown-item.active,
        .dropdown-item:active{
            background: #eaeaea;
        }`
    ],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SelectComponent),
        multi: true
    }]
})
export class SelectComponent extends DomAttr implements ControlValueAccessor {

    title: string;

    searchKey: string;

    readonly: string;

    @Input() disabled: boolean;
    @Input() items: Array<string | number | { value: any, text: string }>;
    @Input() placeholder: string;
    // @Input() value: any;
    @Input() emptyLabel: string;

    // @Output() valueChange = new EventEmitter<any>(false);
    @Output() optionChange = new EventEmitter<any>(false);
    private value: any[];
    applyChange = (value: any) => { };

    constructor() {
        super();
        this.color = Color.primary;
        this.readonly = 'readonly';
        this.disabled = false;
        this.placeholder = 'select...';
        this.searchKey = '';
        this.title = '';
        this.items = [];
        this.emptyLabel = 'No results found.';
    }

    get itemsList(): Array<Item> {
        let items = this.formatItems;
        if (this.searchKey) {
            items = items.filter(e => e.text.indexOf(this.searchKey) > -1);
        }
        return items;
    }

    get formatItems(): Array<Item> {
        const items = new Array<any>();
        if (this.items.length > 0) {
            this.items.forEach(e => {
                items.push(typeof e === 'string' || typeof e === 'number' ? { value: e, text: e } : e);
            });
        }
        return items;
    }

    // ngOnChanges() {
    //     this.setTitle();
    // }

    writeValue(value: any) {
        this.value = value;
        this.setTitle();
    }

    registerOnChange(fn: any): void { this.applyChange = fn; }

    registerOnTouched(fn: any): void { }

    showActiveClass(item: Item): string {
        return item.value === this.value ? `text-${this.inLightOrDark} ${this.bgClass}` : '';
    }

    trackByValue(index: number, item: Item): number { return item.value; }

    setReadonlyStatus(status: boolean) {
        this.readonly = status ? null : 'readonly';
        if (status === false && this.searchKey.length > 0) {
            this.setTitle();
        }
    }

    setValue(item: Item) {
        this.readonly = 'readonly';
        this.value = item.value;
        this.title = item.text;
        this.searchKey = '';
        this.optionChange.emit(item);
        this.applyChange(this.value);
        // this.valueChange.emit(item.value);
    }

    setSearchKey(value: string) {
        this.searchKey = value.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    setTitle() {
        const items = this.formatItems;
        if (this.value !== undefined && this.value != null) {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === this.value) {
                    this.title = items[i].text;
                    return;
                }
            }
        }
        this.title = '';
    }
}
