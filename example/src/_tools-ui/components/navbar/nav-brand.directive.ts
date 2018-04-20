import { Input, Directive, HostBinding } from '@angular/core';
import { DomAttr } from './../../commons/extends/attr.class';

@Directive({
    selector: '*[tsNavBrand]',
})
export class NavBrandDirective extends DomAttr {

    @Input() class: string;

    @HostBinding('class') get _class() {
        return `navbar-brand ${this.class || ''}`;
    }

    constructor() {
        super();
    }

}
