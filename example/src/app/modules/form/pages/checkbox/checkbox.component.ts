import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../cores/services';

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
        { content: '<i class="fa fa-fw fa-wechat"></i>Wechat', value: 1 },
        { content: '<i class="fa fa-fw fa-qq"></i>QQ', value: 2 },
        { content: '<i class="fa fa-fw fa-twitter"></i>Twieer', value: 3 },
        { content: '<i class="fa fa-fw fa-google-plus"></i>Gmail', value: 4 }
    ];

    radioValue = 3;

    checkboxValues = [1, 3];

    switchValue = '关灯';

    buttonValue = 2;

    buttonValues = [1, 3];

    codes = [
        `// 导入单项&多项选择模块在需要使用这个按钮组件的特性模块
import { CheckboxModule } from 'ng-tools-ui';

@NgModule({
    imports: [..., CheckboxModule ],
    ...
})
export class MyModule { }`,
        `<div tsRadioGroup #radioGroup="tsRadioGroup" [(ngModel)]="radioValue">
    <ts-radio
        *ngFor="let radio of radios"
        [label]="radio.label"
        [value]="radio.value"
        (groupHandle)="radioGroup.applyRadioChange($event)">
    </ts-radio>
</div>`,
        `import { Component } from '@angular/core';

@Component({
    templateUrl: './example.html',
})
export class ExampleComponent {

    // 默认选中值
    radioValue = 3;

    // 选项列表
    radios = [
        { label: 'DOM-1', value: 1 },
        { label: 'DOM-2', value: 2 },
        { label: 'DOM-3', value: 3 },
        { label: 'DOM-4', value: 4 }
    ];

}`,
        `<div tsCheckboxGroup #checkboxGroup="tsCheckboxGroup" [(ngModel)]="checkboxValues">
    <ts-checkbox
        *ngFor="let checkbox of checkboxs"
        [label]="checkbox.label" [value]="checkbox.value"
        (groupHandle)="checkboxGroup.applyCheckboxChange()">
    </ts-checkbox>
</div>`,
        `import { Component } from '@angular/core';

@Component({
    templateUrl: './example.html',
})
export class ExampleComponent {

    // 默认选中值
    checkboxValues = [1,3];

    // 选项列表
    checkboxs = [
        { label: 'DOM-1', value: 1 },
        { label: 'DOM-2', value: 2 },
        { label: 'DOM-3', value: 3 },
        { label: 'DOM-4', value: 4 }
    ];

}`,
        `<ts-switch [(ngModel)]="switchValue" [values]="{open:'开灯',close:'关灯'}"></ts-switch>`,
        `import { Component } from '@angular/core';

        @Component({
            templateUrl: './example.html',
        })
        export class ExampleComponent {

            switchValue = '关灯';

        }`,
        `<ts-btns outline [(value)]="buttonValue" [items]="buttons"></ts-btns>
<ts-btns outline  [(value)]="buttonValues" [items]="buttons" [multi]="true"></ts-btns>`,
        `import { Component } from '@angular/core';

@Component({
    templateUrl: './example.html',
})
export class ExampleComponent {

    buttons = [
        { content: '<i class="fa fa-fw fa-wechat"></i>Wechat', value: 1 },
        { content: '<i class="fa fa-fw fa-qq"></i>QQ', value: 2 },
        { content: '<i class="fa fa-fw fa-twitter"></i>Twieer', value: 3 },
        { content: '<i class="fa fa-fw fa-google-plus"></i>Gmail', value: 4 }
    ];

    buttonValue = 2;

    buttonValues = [1, 3];

}`,
    ];

    constructor(public global: GlobalService) { }

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
