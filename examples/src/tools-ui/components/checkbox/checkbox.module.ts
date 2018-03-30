import { NgModule } from '@angular/core';
import { CommonModule } from './../../commons/common.module';
import { RadioComponent } from './radio.component';
import { RadiosDirective } from './radios.direvtive';
import { CheckboxComponent } from './checkbox.component';
import { CheckboxDirective } from './checkboxs.direvtive';
import { SwitchComponent } from './switch.component';
import { ButtonsComponent } from './buttons.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        RadioComponent,
        RadiosDirective,
        CheckboxComponent,
        CheckboxDirective,
        SwitchComponent,
        ButtonsComponent
    ],
    exports: [
        CommonModule,
        RadioComponent,
        RadiosDirective,
        CheckboxComponent,
        CheckboxDirective,
        SwitchComponent,
        ButtonsComponent
    ]
})
export class CheckboxModule { }
