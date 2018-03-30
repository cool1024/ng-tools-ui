import { Input, Component, HostBinding, Output, EventEmitter } from '@angular/core';
import { DomAttr } from './../../commons/extends/attr.class';
import { Breadcrumb } from './breadcrumb.interface';

@Component({
    selector: 'ts-nav-breadcrumb',
    template: `
    <div class="d-inline-block ts-breadcrumb">
        <span *ngFor="let item of breadcrumbs" (click)="activeDo(item.url)">
            <i [class]="item.icon||''"></i>{{item.title}}
        </span>
    </div>
    `,
    styles: [
        `
        .ts-breadcrumb span::after {
            content: '>';
        }
        .ts-breadcrumb span:last-child {
            opacity: .8;
        }
        .ts-breadcrumb span:last-child::after {
            content: '';
        }
        `
    ]
})
export class NavBreadcrumbComponent extends DomAttr {

    @Input() breadcrumbs: Breadcrumb[];

    @Output() breadcrumbActiveChange = new EventEmitter<string>();

    constructor() {
        super();
        this.breadcrumbs = new Array<Breadcrumb>();
    }

    activeDo(url: string) {
        this.breadcrumbActiveChange.emit(url);
    }

}
