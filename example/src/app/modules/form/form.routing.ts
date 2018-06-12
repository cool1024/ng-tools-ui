import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { CheckboxComponent } from './pages/checkbox/checkbox.component';
import { SelectComponent } from './pages/select/select.component';
import { LoopCardComponent } from './pages/loop-card/loop-card.component';
import { SearchComponent } from './pages/search/search.component';
import { FlowComponent } from './pages/flow/flow.component';

const routes: Routes = [
    { path: 'datepicker', component: DatepickerComponent },
    { path: 'checkbox', component: CheckboxComponent },
    { path: 'select', component: SelectComponent },
    { path: 'loopcard', component: LoopCardComponent },
    { path: 'search', component: SearchComponent },
    { path: 'flow', component: FlowComponent },
];

export const declarationComponents = [
    DatepickerComponent,
    CheckboxComponent,
    SelectComponent,
    LoopCardComponent,
    SearchComponent,
    FlowComponent,
];

export const entryComponents = [];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class FormRoutingModule { }
