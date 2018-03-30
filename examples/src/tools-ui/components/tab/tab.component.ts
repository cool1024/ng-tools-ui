import {
    Component,
    EventEmitter,
    Input,
    Output,
    AfterViewInit,
} from '@angular/core';
import { TabsDirective } from './tab.directive';
import { DomAttr } from './../../commons/extends/attr.class';

@Component({
    selector: 'ts-tabs',
    template: `
    <ul class="nav nav-tabs" [class.justify-content-end]="position==='end'" [class.justify-content-center]="position==='center'">
        <li *ngFor="let tab of tabs" class="nav-item pointer">
            <span class="nav-link {{tab===activeTab?tabClass+' '+textClass:''}}"
            [class.active]="tab===activeTab" (click)="changeTab(tab)">{{tab}}</span>
        </li>
    </ul>`
})
export class TabComponent extends DomAttr implements AfterViewInit {

    @Input() tabs: Array<string>;

    @Input() activeTab: string;

    @Input() position: string;

    @Input() target: TabsDirective;

    @Output() tabChange = new EventEmitter<string>();

    ngAfterViewInit() {
        this.target.changeTab(this.activeTab || null);
    }

    changeTab(tab: string) {
        this.activeTab = tab;
        this.target.changeTab(tab);
    }
}
