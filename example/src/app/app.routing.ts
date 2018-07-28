import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from './cores/services';

const routes: Routes = [

    // 此处设置网站首页
    { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },

    // 懒加载子模块
    // { path: 'dashboard', loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule' },
    { path: 'system', loadChildren: 'app/modules/system/system.module#SystemModule', canActivate: [GuardService] },
    { path: 'form', loadChildren: 'app/modules/form/form.module#FormModule', canActivate: [GuardService] },
    { path: 'upload', loadChildren: 'app/modules/upload/upload.module#UploadModule', canActivate: [GuardService] },
    { path: 'pad', loadChildren: 'app/modules/pad/pad.module#PadModule', canActivate: [GuardService] },
    { path: 'table', loadChildren: 'app/modules/table/table.module#TableModule', canActivate: [GuardService] },
    { path: 'message', loadChildren: 'app/modules/message/message.module#MessageModule', canActivate: [GuardService] },
    { path: 'demo', loadChildren: 'app/modules/demo/demo.module#DemoModule', canActivate: [GuardService] },
    { path: 'laboratory', loadChildren: 'app/modules/laboratory/laboratory.module#LaboratoryModule', canActivate: [GuardService] },
    { path: 'buttons', loadChildren: 'app/modules/buttons/buttons.module#ButtonsModule', canActivate: [GuardService] },
    { path: 'admin', loadChildren: 'app/modules/admin/admin.module#AdminModule', canActivate: [GuardService] },
    { path: 'store', loadChildren: 'app/modules/store/store.module#StoreModule', canActivate: [GuardService] },
    { path: 'folder', loadChildren: './modules/folder/folder.module#FolderModule', canActivate: [GuardService] },
    // 最后全局匹配其他链接
    { path: '**', redirectTo: 'dashboard/error', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            enableTracing: false,
            // preloadingStrategy: PreloadAllModules,
            useHash: false
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
