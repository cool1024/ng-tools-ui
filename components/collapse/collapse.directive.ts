import { Directive, ElementRef, AfterViewInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { HtmlDomService } from './../../commons/services/htmldom.service';
import { Toggle } from './../../commons/interfaces/toggle.interface';

@Directive({
    selector: '*[tsCollapse]',
    exportAs: 'tsCollapse',
})
export class CollapseDirective implements AfterViewInit, OnChanges, Toggle {

    @Input() open: boolean;

    @Output() stateChange = new EventEmitter<boolean>();

    private pad: HTMLElement;

    private isReady: boolean;

    constructor(private elementRef: ElementRef, private htmlDomService: HtmlDomService) {
        this.open = false;
        this.isReady = false;
    }

    ngOnChanges() {
        if (this.isReady) {
            this.open ? this.collapseOpen() : this.collapseClose();
        }
    }

    ngAfterViewInit() {
        this.pad = this.elementRef.nativeElement;
        this.pad.style.transition = 'height .35s ease';
        this.pad.style.overflow += 'hidden';
        this.open ? this.collapseOpen() : this.collapseClose();
        this.isReady = true;
    }

    collapseClose() {
        this.open = false;
        const height = this.htmlDomService.getExpHeight(this.pad);
        this.pad.style.height = height + 'px';
        setTimeout(() => { this.pad.style.height = '0px'; }, 100);
        this.stateChange.emit(this.open);
    }

    collapseOpen() {
        this.open = true;
        this.pad.style.height = '';
        const height = this.htmlDomService.getExpHeight(this.pad);
        this.pad.style.height = '0px';
        setTimeout(() => { this.pad.style.height = height + 'px'; });
        setTimeout(() => { this.pad.style.height = ''; }, 350);
        this.stateChange.emit(this.open);
    }

    toggle() {
        this.open ? this.collapseClose() : this.collapseOpen();
    }
}
