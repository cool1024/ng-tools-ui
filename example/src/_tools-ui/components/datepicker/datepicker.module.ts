import { NgModule } from '@angular/core';
import { DatepickerComponent } from './/datepicker.component';
import { DropdownModule } from './../dropdown/dropdown.module';
import { ButtonModule } from './../button/button.module';

@NgModule({
    imports: [
        DropdownModule,
        ButtonModule
    ],
    declarations: [
        DatepickerComponent
    ],
    exports: [
        ButtonModule,
        DatepickerComponent
    ]
})
export class DatePickerModule { }
