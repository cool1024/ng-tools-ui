import { NgModule } from '@angular/core';
import { CommonModule } from './../../commons/common.module';
import { ButtonDirective } from './button.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ButtonDirective,
    ],
    exports: [
        CommonModule,
        ButtonDirective,
    ]
})
export class ButtonModule { }
