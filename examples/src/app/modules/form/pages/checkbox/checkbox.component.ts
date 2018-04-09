import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../cores/services/theme.service';

@Component({
    templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {

    date: string;

    radios = [
        { label: 'DOM-1', value: 1 },
        { label: 'DOM-2', value: 2 },
        { label: 'DOM-3', value: 3 },
        { label: 'DOM-4', value: 4 }
    ];

    checkboxs = [
        { label: 'DOM-1', value: 1 },
        { label: 'DOM-2', value: 2 },
        { label: 'DOM-3', value: 3 },
        { label: 'DOM-4', value: 4 }
    ];

    buttons = [
        { content: `<i class="fa fa-fw fa-wechat"></i>Wechat`, value: 1 },
        { content: '<i class="fa fa-fw fa-qq"></i>QQ', value: 2 },
        { content: '<i class="fa fa-fw fa-twitter"></i>Twieer', value: 3 },
        { content: '<i class="fa fa-fw fa-google-plus"></i>Gmail', value: 4 }
    ];

    radioValue = 3;

    checkboxValues = [1, 3];

    switchValue = '关灯';

    buttonValue = 2;

    buttonValues = [1, 3];

    constructor(public theme: ThemeService) { }

    addRadio() {
        const last = this.radios[this.radios.length - 1] || { label: '', value: 0 };
        this.radios.push({ label: `DOM-${last.value + 1}`, value: last.value + 1 });
    }

    removeRadio() {
        if (this.radios.length > 0) {
            this.radios.splice(-1, 1);
        }
    }

    addCheckbox() {
        const last = this.checkboxs[this.checkboxs.length - 1] || { label: '', value: 0 };
        this.checkboxs.push({ label: `DOM-${last.value + 1}`, value: last.value + 1 });
    }

    removeCheckbox() {
        if (this.checkboxs.length > 0) {
            this.checkboxs.splice(-1, 1);
        }
    }

}
