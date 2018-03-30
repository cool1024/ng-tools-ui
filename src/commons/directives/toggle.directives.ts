import { Directive, HostListener, Input, ElementRef, HostBinding, AfterViewInit } from '@angular/core';
import { Toggle } from '../interfaces/toggle.interface';
import { DomAttr } from '../extends/attr.class';

@Directive({
    selector: `[tsToggle]`,
    exportAs: 'tsToggle'
})
export class ToggleDirective implements AfterViewInit {

    blur: ($event: any) => void;

    @Input() target: Toggle;

    @Input() bind: Toggle;

    @HostListener('click') onClick() {
        return !this.target || this.target.toggle();
    }

    @HostListener('blur', ['$event']) onBlur($event: any) {
        return !this.blur || this.blur($event);
    }


    get dom(): HTMLElement | any {
        return this.elementRef.nativeElement;
    }

    constructor(public elementRef: ElementRef) { }

    ngAfterViewInit() {
        if (this.bind) {
            this.bind.bind(this);
        }
    }

}
