import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * tool-ui
 */
import {
    ButtonModule,
    ModalModule,
    PaginationModule,
    ConfirmModule,
    CheckboxModule,
    CollapseModule,
    TabModule,
    ImageModule,
    SelectModule,
    UploadModule,
} from 'ng-tools-ui';

/**
 * 路由模块
 */
import { SystemRoutingModule, declarationComponents, entryComponents } from './system.routing';

/**
 * 服务列表
 */
import { PermissionService } from './services/permission.service';
import { MenuService } from './services/menu.service';
import { RoleService } from './services/role.service';
import { ManagerService } from './services/manager.service';
import { SortablejsModule } from 'angular-sortablejs/dist';

@NgModule({
    imports: [
        FormsModule,
        ButtonModule,
        ModalModule,
        PaginationModule,
        ConfirmModule,
        CollapseModule,
        TabModule,
        ImageModule,
        SelectModule,
        CheckboxModule,
        SystemRoutingModule,
        UploadModule,
        SortablejsModule,
    ],
    declarations: [
        declarationComponents,
    ],
    entryComponents: [
        entryComponents,
    ],
    providers: [
        PermissionService,
        MenuService,
        RoleService,
        ManagerService,
    ]

})
export class SystemModule { }
