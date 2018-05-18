import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * tool-ui
 */
import {
    ButtonModule,
    ModalModule,
    DatePickerModule,
    PaginationModule,
    ConfirmModule,
    UploadModule,
    CheckboxModule,
    ImageModule,
    CssloadModule,
    CollapseModule,
} from 'ng-tools-ui';

/**
 * 路由模块
 */
import { SystemRoutingModule, declarationComponents, entryComponents } from './system.routing';

/**
 * 服务列表
 */
import { PermissionService } from './services/permission.service';

@NgModule({
    imports: [
        FormsModule,
        ButtonModule,
        ModalModule,
        DatePickerModule,
        PaginationModule,
        ConfirmModule,
        CollapseModule,
        SystemRoutingModule,
    ],
    declarations: [
        declarationComponents,
    ],
    entryComponents: [
        entryComponents,
    ],
    providers: [
        PermissionService,
    ]

})
export class SystemModule { }
