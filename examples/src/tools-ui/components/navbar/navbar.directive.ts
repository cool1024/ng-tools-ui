import { Input, Directive, HostBinding } from '@angular/core';
import { DomAttr } from './../../commons/extends/attr.class';

@Directive({
    selector: '*[tsNavbar]',
})
export class NavbarDirective extends DomAttr {

    @Input() class: string;

    @HostBinding('class') get _class() {
        return `navbar text-${this.inLightOrDark} navbar-expand-${this.browserSize} ${this.bgClass} ${this.class || ''}`;
    }

    constructor() {
        super();
    }

}
