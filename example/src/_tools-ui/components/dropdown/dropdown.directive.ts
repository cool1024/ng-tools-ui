import {
    Component,
    ElementRef,
    Directive,
    AfterViewInit,
    Input,
    Output,
    ContentChild,
    forwardRef,
    HostBinding,
    OnInit,
    HostListener,
    EventEmitter
} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ToggleDirective } from '../../commons/directives/toggle.directives';
import { ElementDef } from '@angular/core/src/view';
import { DomLoad } from '../../commons/interfaces/load.interface';

@Directive({
    selector: `[tsDropdown]`,
    exportAs: 'tsDropdown',
})
export class DropdownDirective implements AfterViewInit, OnInit, DomLoad {

    @Input() dropup: string;

    @Input() class: string;

    @Input() useItemClickClose = true;

    @Output() displayChange = new EventEmitter<boolean>();

    @ContentChild(forwardRef(() => ToggleDirective)) toggleDirective: ToggleDirective;

    @ContentChild(forwardRef(() => DropMenuDirective)) dropMenuDirective: DropMenuDirective;

    @HostBinding('class') _class: string;

    @HostListener('document:click', ['$event.target']) onDocumentClick(dom: any): void {
        if ((!this.isClose()) && (!this.elementRef.nativeElement.contains(dom))) {
            this.dismiss();
        }
    }

    constructor(private elementRef: ElementRef) {
        this.dropup = null;
        this.class = '';
    }

    ngOnInit() {
        this._class = this.class + ' btn-group' + (this.dropup === null ? '' : ' dropup');
    }

    ngAfterViewInit() {
        this.toggleDirective.target = this;
        if (!this.toggleDirective.dom.type) {
            this.toggleDirective.dom.type = 'button';
        }
        this.dropMenuDirective.onClick = () => {
            if (this.useItemClickClose) {
                this.toggle();
            }
        };
    }

    toggle() {
        this.dropMenuDirective.dom.style.display === 'block' ? this.dismiss() : this.present();
    }

    isClose() {
        return this.dropMenuDirective.isClose();
    }

    present() {
        const btn = this.toggleDirective.elementRef.nativeElement;
        const btnSize: [number, number] = [btn.clientWidth, btn.clientHeight];
        this.dropMenuDirective.setShow(this.dropup !== null, btnSize);
        this.displayChange.emit(false);
    }

    dismiss() {
        this.dropMenuDirective.setHidden();
        this.displayChange.emit(false);
    }
}

@Directive({
    selector: `[tsDropMenu]`,
    exportAs: `tsDropMenu`,
})
export class DropMenuDirective implements AfterViewInit {

    @Input() offsetX: number;

    @Input() offsetY: number;

    @Output() displayChange = new EventEmitter<boolean>();

    @HostBinding('class') class: string;

    @HostListener('click') onClick: any;

    dom: HTMLDivElement;

    constructor(
        public elementRef: ElementRef,
    ) {
        this.class = 'dropdown-menu';
        this.offsetX = 0;
        this.offsetY = 4;
    }

    ngAfterViewInit() {
        this.dom = this.elementRef.nativeElement;
        this.dom.style.top = '0';
        this.dom.style.left = '0';
    }

    private setPostion(dropup = false, btnSize: [number, number]) {
        if (dropup !== null && dropup !== false) {
            this.dom.style.transform = `translate3d(${this.offsetX}px, -${this.dom.clientHeight + this.offsetY}px, 0px)`;
        } else {
            this.dom.style.transform = `translate3d(${this.offsetX}px, ${btnSize[1] + this.offsetY}px, 0px)`;
        }
    }

    setShow(dropup = false, btnSize: [number, number]) {
        this.dom.style.display = 'block';
        this.setPostion(dropup, btnSize);
        this.displayChange.emit(true);
    }

    setHidden() {
        this.dom.style.display = '';
        this.displayChange.emit(false);
    }

    isClose(): boolean {
        return this.dom.style.display !== 'block';
    }
}
