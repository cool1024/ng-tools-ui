/**
 * 实验室模块路由文件
 *
 * @author xiaojian
 * @file   laboratory.routing.ts
 * @date   2018-6-26 21:12:51
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from './pages/badge/badge.component';
import { ImageComponent } from './pages/image/image.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { FlexComponent } from './pages/flex/flex.component';

const routes: Routes = [
    { path: 'badge', component: BadgeComponent },
    { path: 'image', component: ImageComponent },
    { path: 'loading', component: LoadingComponent },
    { path: 'datepicker', component: DatepickerComponent },
    { path: 'flex', component: FlexComponent },
];

/**
 * 指令、组件、管道声明
 */
export const declarationComponents = [
    BadgeComponent,
    ImageComponent,
    LoadingComponent,
    DatepickerComponent,
    FlexComponent,
];

/**
 * 动态组件（模态框，窗口）
 */
export const entryComponents = [];

/**
 * 服务列表
 */
export const providers = [];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LaboratoryRoutingModule { }
