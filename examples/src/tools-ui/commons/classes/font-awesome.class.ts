import { Icon } from './../interfaces/icon.interface';

export class FontAwesome implements Icon {

    constructor(private name: string, private flash = false) { }

    toHtmlString(): string {
        return `<i class="fa fa-${this.name} fa-fw ${this.flash ? 'fa-pulse' : ''}"></i>`;
    }
}
