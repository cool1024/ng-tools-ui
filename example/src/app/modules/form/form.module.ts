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

/*路由模块*/
import { FormRoutingModule, declarationComponents } from './form.routing';
import { SearchModule } from '../../../_tools-ui';

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
        SearchModule,
    ],
    declarations: [declarationComponents],
})
export class FormModule { }
