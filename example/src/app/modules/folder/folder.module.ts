/**
 * 请编写模块文件说明
 *
 * @author 填写作者
 * @file   folder.module.ts
 * @date   2018-7-5 21:11:39
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FolderRoutingModule, declarationComponents, entryComponents, providers } from './folder.routing';
import { ButtonModule, WindowModule, CheckboxModule } from 'ng-tools-ui';

@NgModule({
    imports: [
        FormsModule,
        ButtonModule,
        CheckboxModule,
        WindowModule,
        FolderRoutingModule,
    ],
    declarations: [declarationComponents],
    entryComponents: [entryComponents],
    providers: [providers]
})
export class FolderModule { }
