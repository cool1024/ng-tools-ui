import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[tsModalHost]',
})
export class ModalDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
