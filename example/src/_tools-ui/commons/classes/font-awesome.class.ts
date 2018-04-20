import { Icon } from './../interfaces/icon.interface';

export class FontAwesome implements Icon {

    constructor(private name: string, private flash = false) { }

    toHtmlString(): string {
        return `<i class="${this.toClassString}"></i>`;
    }

    toClassString(): string {
        return `fa fa-${this.name} fa-fw ${this.flash ? 'fa-pulse' : ''}`;
    }

    toDom() {
        const dom = document.createElement('i');
        dom.className = this.toClassString();
        return dom;
    }
}
