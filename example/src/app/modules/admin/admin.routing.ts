import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyTableComponent } from './pages/company-table/company-table.component';
import { CompanyDetailComponent } from './pages/company-detail/company-detail.component';

const routes: Routes = [
    {
        path: 'company',
        component: CompanyTableComponent,
        children: [
            { path: 'detail', component: CompanyDetailComponent },
            { path: 'detail/:id', component: CompanyDetailComponent },
        ]
    },
];

export const declarationComponents = [
    CompanyTableComponent,
    CompanyDetailComponent,
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
