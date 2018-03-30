import { Directive, HostListener, Input, HostBinding } from '@angular/core';
import { ImageConfig } from './image.config';

@Directive({
    selector: `img[tsImg]`,
    exportAs: 'tsImg'
})
export class ImageDirective {

    @Input() dataSrc: string;

    @HostBinding('src') src: string;

    @HostListener('error', ['$event.target']) onError(image: HTMLImageElement) {
        this.src = this.dataSrc || this.config.default;
    }

    constructor(private config: ImageConfig) { }
}
