import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuManagerComponent } from './pages/menu-manager/menu-manager.component';


const routes: Routes = [
    { path: 'menu', component: MenuManagerComponent },
];

export const declarationComponents = [
    MenuManagerComponent
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
export class SystemRoutingModule { }
