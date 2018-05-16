import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuManagerComponent } from './pages/menu-manager/menu-manager.component';
import { PermissionManagerComponent } from './pages/permission-manager/permission-manager.component';
import { PermissionModalComponent } from './pages/permission-manager/permission-modal.component';


const routes: Routes = [
    { path: 'menu', component: MenuManagerComponent },
    { path: 'permission', component: PermissionManagerComponent },
];

export const declarationComponents = [
    MenuManagerComponent,
    PermissionManagerComponent,
    PermissionModalComponent,
];

export const entryComponents = [
    PermissionModalComponent,
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
