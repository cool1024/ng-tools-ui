import { Directive, HostBinding } from '@angular/core';
import { DomAttr } from './../../commons/extends/attr.class';
import { Toggle } from './../../commons/interfaces/toggle.interface';

@Directive({
    selector: '*[tsNavList]',
    exportAs: 'tsNavList',
})
export class NavListDirective extends DomAttr implements Toggle {


    @HostBinding('class') class: string;

    private open: boolean;

    constructor() {
        super();
        this.class = 'navbar-collapse collapse';
        this.open = true;
    }

    toggle() {
        this.class = `navbar-collapse ${this.open ? 'show' : 'collapse'}`;
        this.open = !this.open;
    }

}
