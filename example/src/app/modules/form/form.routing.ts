import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { CheckboxComponent } from './pages/checkbox/checkbox.component';
import { SelectComponent } from './pages/select/select.component';
import { LoopCardComponent } from './pages/loop-card/loop-card.component';

const routes: Routes = [
    { path: 'datepicker', component: DatepickerComponent },
    { path: 'checkbox', component: CheckboxComponent },
    { path: 'select', component: SelectComponent },
    { path: 'loopcard', component: LoopCardComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class FormRoutingModule { }
