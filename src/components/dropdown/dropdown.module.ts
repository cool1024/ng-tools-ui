import { NgModule } from '@angular/core';
import { CommonModule } from './../../commons/common.module';
import { ButtonModule } from './../button/button.module';
import { DropdownDirective, DropMenuDirective } from './dropdown.directive';
import { DropdownComponent } from './dropdown.component';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule
    ],
    declarations: [
        DropdownDirective,
        DropMenuDirective,
        DropdownComponent,
    ],
    exports: [
        CommonModule,
        ButtonModule,
        DropdownDirective,
        DropMenuDirective,
        DropdownComponent
    ]
})
export class DropdownModule { }
