/**
 * 请编写路由文件说明
 *
 * @author 填写作者
 * @file   folder.routing.ts
 * @date   2018-7-5 21:11:39
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './pages/example/example.component';
import { FolderComponent } from './windows/folder/folder.component';

const routes: Routes = [
    { path: 'example', component: ExampleComponent },
];

/**
 * 指令、组件、管道声明
 */
export const declarationComponents = [
    ExampleComponent,
    FolderComponent,
];

/**
 * 动态组件（模态框，窗口）
 */
export const entryComponents = [
    FolderComponent,
];

/**
 * 服务列表
 */
export const providers = [];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FolderRoutingModule { }
