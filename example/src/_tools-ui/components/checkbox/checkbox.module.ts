import { NgModule } from '@angular/core';
import { CommonModule } from './../../commons/common.module';
import { RadioComponent } from './radio.component';
import { CheckboxComponent } from './checkbox.component';
import { SwitchComponent } from './switch.component';
import { ButtonsComponent } from './buttons.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        RadioComponent,
        CheckboxComponent,
        SwitchComponent,
        ButtonsComponent
    ],
    exports: [
        CommonModule,
        RadioComponent,
        CheckboxComponent,
        SwitchComponent,
        ButtonsComponent
    ]
})
export class CheckboxModule { }
