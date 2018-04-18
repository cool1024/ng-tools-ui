import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyTableComponent } from './pages/company-table/company-table.component';

const routes: Routes = [
    { path: 'company', component: CompanyTableComponent },
];

export const declarationComponents = [
    CompanyTableComponent,
];

export const entryComponents = [
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }
