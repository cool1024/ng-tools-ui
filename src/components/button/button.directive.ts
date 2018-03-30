import { Directive, HostListener, EventEmitter, Input, ElementRef, OnInit, Output, HostBinding } from '@angular/core';
import { FontAwesome } from './../../commons/classes/font-awesome.class';
import { DomAttr } from './../../commons/extends/attr.class';
import { DomLoad } from './../../commons/interfaces/load.interface';

@Directive({
    selector: `button[tsBtn]`,
    exportAs: 'tsBtn'
})
export class ButtonDirective extends DomAttr implements OnInit, DomLoad {

    private button: HTMLButtonElement;

    private icon: string;

    @Input() loading: boolean;

    @Input() class: string;

    @Output() load = new EventEmitter<DomLoad>();

    @Input() disabled: boolean;

    @HostBinding('disabled') get _disabled(): boolean {
        return this.disabled || this.loading === true;
    }

    @HostBinding('class') get _class(): string {
        return `${this.btnClass} ${this.class || ''}`;
    }

    @HostListener('click', ['$event']) onClick() {
        this.present();
        this.load.emit(this);
    }

    /**
     * construnct
     *
     * @param {ElementRef} el Directive target document
     */
    constructor(private el: ElementRef) {
        super();
        this.outline = null;
        this.lg = null;
        this.sm = null;
        this.loading = null;
        this.icon = new FontAwesome('spinner', true).toHtmlString();
    }

    /**
     * Directive init hook
     */
    ngOnInit() {
        this.button = this.el.nativeElement;
        this.button.type = 'button';
    }

    /**
     * Show loading icon
     */
    present() {
        if (this.loading !== null && !this.hasLoadingIcon()) {
            this.button.innerHTML = this.icon + this.button.innerHTML;
            this.loading = true;
        }
    }

    /**
     * Remove loading icon
     */
    dismiss() {
        if (this.hasLoadingIcon()) {
            this.button.removeChild(this.button.childNodes[0]);
            this.button.innerHTML = this.button.innerHTML.replace(`<!-- ${this.icon} -->`, '');
            this.loading = false;
        }
    }

    /**
     * Check loading icon
     */
    private hasLoadingIcon(): boolean {
        return this.button.innerHTML.indexOf(`<!-- ${this.icon} -->`) >= 0;
    }

}
