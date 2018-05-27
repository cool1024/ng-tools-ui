import { Input, Directive, HostBinding, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { DomAttr } from './../../commons/extends/attr.class';

@Directive({
    selector: '*[tsNavbar]',
})
export class NavbarDirective extends DomAttr implements AfterViewInit {

    @Input() class: string;

    @HostBinding('class') get _class() {
        return `navbar flex-nowrap text-${this.inLightOrDark} ${this.bgClass} ${this.class || ''}`;
    }

    constructor(private elementRef: ElementRef) {
        super();
    }

    ngAfterViewInit() {
        const dom: HTMLDivElement = this.elementRef.nativeElement;
    }

}

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

@Directive({
    selector: 'div[tsNavList]',
    exportAs: 'tsNavList',
})
export class NavListDirective implements AfterContentInit {

    constructor(private elementRef: ElementRef) { }

    ngAfterContentInit() {
        const dom: HTMLDivElement = this.elementRef.nativeElement;
        dom.style.flexGrow = '1';
    }
}
