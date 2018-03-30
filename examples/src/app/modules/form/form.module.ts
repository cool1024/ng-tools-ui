import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*tool-ui*/
import {
    DatePickerModule,
    DropdownModule,
    CheckboxModule,
    SelectModule,
    PrismModule,
} from './../../../tools-ui';

/*路由模块*/
import { FormRoutingModule } from './form.routing';

/*页面组件*/
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { CheckboxComponent } from './pages/checkbox/checkbox.component';
import { SelectComponent } from './pages/select/select.component';


@NgModule({
    imports: [
        FormsModule,
        FormRoutingModule,
        DatePickerModule,
        DropdownModule,
        CheckboxModule,
        SelectModule,
        PrismModule,
    ],
    declarations: [
        DatepickerComponent,
        CheckboxComponent,
        SelectComponent,
    ],
})
export class FormModule { }
