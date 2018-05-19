import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuManagerComponent } from './pages/menu-manager/menu-manager.component';
import { PermissionManagerComponent } from './pages/permission-manager/permission-manager.component';
import { PermissionModalComponent } from './pages/permission-manager/permission-modal.component';
import { PermissionGroupModalComponent } from './pages/permission-manager/permission-group-modal.component';
import { MenuGroupModalComponent } from './pages/menu-manager/menu-group-modal.component';
import { MenuModalComponent } from './pages/menu-manager/menu-modal.component';


const routes: Routes = [
    { path: 'menu', component: MenuManagerComponent },
    { path: 'permission', component: PermissionManagerComponent },
];

export const declarationComponents = [
    MenuManagerComponent,
    PermissionManagerComponent,
    PermissionGroupModalComponent,
    PermissionModalComponent,
    MenuGroupModalComponent,
    MenuModalComponent,
];

export const entryComponents = [
    PermissionModalComponent,
    PermissionGroupModalComponent,
    MenuGroupModalComponent,
    MenuModalComponent,
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
