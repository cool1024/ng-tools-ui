import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    OnChanges,
    AfterViewInit,
    ElementRef,
} from '@angular/core';
import { Item } from './../../commons/interfaces/item.interface';
import { DomAttr } from '../../commons/extends/attr.class';
import { DropdownDirective } from '../dropdown/dropdown.directive';

@Component({
    selector: '*[tsSelects]',
    template: `
    <div tsDropdown  #tsDropdown="tsDropdown" (displayChange)="cleanSearch()" class="w-100" [useItemClickClose]="false">
        <div tsToggle
            [class.p-0]="activeItems.length>0"
            [class.p-2]="activeItems.length<=0"
            class="pointer w-100">
            <span class="text-muted" *ngIf="activeItems.length<=0">{{placeholder}}</span>
            <span class="badge p-2 m-1 no-select {{badgeClass}}" *ngFor="let active of activeItems">
                <i (click)="setValue(active)" class="fa fa-fw fa-close"></i>
                {{active.text}}
            </span>
        </div>
        <div tsDropMenu [style.width]="'100%'">
            <div class="w-100 ts-select-item">
                <div class="pl-2 pb-2 pr-2">
                    <input [(ngModel)]="searchKey" [placeholder]="searchLabel" class="form-control" type="text">
                </div>
                <p class="text-center" *ngIf="searchItems.length<=0">{{emptyLabel}}</p>
                <div *ngFor="let item of searchItems"
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
        </div>
    </div>`,
    styles: [
        `.ts-select-item {
            max-height: 270px;
            overflow-y: auto;
        }
        .dropdown-item.active,
        .dropdown-item:active{
            color: #343a40 !important;
            background: #f8f9fa !important;
        }
        .dropdown-item:after{
            text-align:center;
        }`
    ]
})
export class SelectsComponent extends DomAttr implements OnChanges, AfterViewInit {

    @Input() items: Array<Item>;
    @Input() placeholder: string;
    @Input() values: any[];
    @Input() emptyLabel: string;
    @Input() searchLabel: string;

    @Output() valuesChange = new EventEmitter<any>(false);
    @Output() optionChange = new EventEmitter<any>(false);

    @ViewChild('tsDropdown') dropdown: DropdownDirective;

    title: string;
    searchKey: string;
    activeItems: Array<Item>;
    private changeInside: boolean;

    constructor(private elementRef: ElementRef) {
        super();
        this.placeholder = 'Select...';
        this.searchKey = '';
        this.title = '';
        this.items = [];
        this.activeItems = [];
        this.emptyLabel = 'No results found.';
        this.searchLabel = 'Search...';
        this.changeInside = false;
    }

    get searchItems(): Item[] {
        let items = this.items;
        if (this.searchKey) {
            items = items.filter(e => e.text.indexOf(this.searchKey) > -1);
        }
        return items;
    }

    ngOnChanges() {
        if (this.changeInside) {
            this.changeInside = false;
        }
        this.activeItems = [];
        this.values.forEach(value => {
            const temp = this.items.find(item => item.value === value);
            if (temp !== undefined) {
                this.activeItems.push(temp);
            }
        });
    }

    ngAfterViewInit() {
        const dom: HTMLElement = this.elementRef.nativeElement;
        dom.classList.add('form-control', 'p-0');
        if (this.sm !== null) {
            dom.classList.add('form-control-sm');
        }
        if (this.lg !== null) {
            dom.classList.add('form-control-lg');
        }
    }

    cleanSearch() {
        this.searchKey = '';
    }

    setValue(item: Item) {
        const index = this.activeItems.indexOf(item);
        if (index < 0) {
            this.activeItems.push(item);
        } else {
            this.activeItems.splice(index, 1);
        }
        this.values = this.activeItems.map<Item>(element => element.value);
        this.valuesChange.emit(this.values);
        this.optionChange.emit(this.activeItems);
        setTimeout(() => {
            if (!this.dropdown.isClose()) {
                this.dropdown.present();
            }
        });

    }

    isActiveItem(item: Item): boolean {
        return this.activeItems.indexOf(item) >= 0;
    }
}
