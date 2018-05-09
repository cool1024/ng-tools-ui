import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { GuardService } from './cores/services';

const routes: Routes = [

    // 此处设置网站首页
    { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },

    // 懒加载子模块
    { path: 'dashboard', loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule' },
    { path: 'form', loadChildren: 'app/modules/form/form.module#FormModule', canActivate: [GuardService] },
    { path: 'upload', loadChildren: 'app/modules/upload/upload.module#UploadModule' },
    { path: 'pad', loadChildren: 'app/modules/pad/pad.module#PadModule' },
    { path: 'table', loadChildren: 'app/modules/table/table.module#TableModule' },
    { path: 'message', loadChildren: 'app/modules/message/message.module#MessageModule' },
    { path: 'demo', loadChildren: 'app/modules/demo/demo.module#DemoModule' },
    { path: 'buttons', loadChildren: 'app/modules/buttons/buttons.module#ButtonsModule' },
    { path: 'admin', loadChildren: 'app/modules/admin/admin.module#AdminModule' },
    { path: 'store', loadChildren: 'app/modules/store/store.module#StoreModule' },

    // 最后全局匹配其他链接
    { path: '**', redirectTo: 'dashboard/error', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            enableTracing: false,
            // preloadingStrategy: PreloadAllModules,
            useHash: true
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
