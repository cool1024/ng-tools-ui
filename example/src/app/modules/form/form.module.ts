import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*tool-ui*/
import {
    DatePickerModule,
    DropdownModule,
    CheckboxModule,
    SelectModule,
    PrismModule,
    LoopCardModule,
    TabModule,
    CollapseModule,
} from 'ng-tools-ui';

// import { CheckboxModule } from './../../../_tools-ui';

/*路由模块*/
import { FormRoutingModule } from './form.routing';

/*页面组件*/
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { CheckboxComponent } from './pages/checkbox/checkbox.component';
import { SelectComponent } from './pages/select/select.component';
import { LoopCardComponent } from './pages/loop-card/loop-card.component';


@NgModule({
    imports: [
        FormsModule,
        FormRoutingModule,
        DatePickerModule,
        DropdownModule,
        CheckboxModule,
        SelectModule,
        PrismModule,
        LoopCardModule,
        TabModule,
        CollapseModule,
    ],
    declarations: [
        DatepickerComponent,
        CheckboxComponent,
        SelectComponent,
        LoopCardComponent,
    ],
})
export class FormModule { }
