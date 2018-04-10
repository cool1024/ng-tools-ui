import { Component, Input } from '@angular/core';
import { MenuItem } from './menu.interface';
import { DomAttr } from '../../commons/extends/attr.class';


@Component({
    selector: `ts-menu-push`,
    exportAs: 'tsMenuPush',
    template: `<h3>
        <button type="button" class="btn btn-outline-dark">Dark
            X
        </button>
    </h3>`,
    styles: [
        `
        `,
    ]
})
export class MenuPushComponent extends DomAttr {

    @Input() items: MenuItem[];

}
