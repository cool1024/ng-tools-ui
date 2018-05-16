import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*tool-ui*/
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
} from 'ng-tools-ui';

/*路由模块*/
import { SystemRoutingModule, declarationComponents, entryComponents } from './system.routing';

/*服务列表*/


@NgModule({
    imports: [
        FormsModule,
        ButtonModule,
        ModalModule,
        DatePickerModule,
        PaginationModule,
        ConfirmModule,
        UploadModule,
        CheckboxModule,
        CssloadModule,
        ImageModule,
        SystemRoutingModule,
    ],
    declarations: [
        declarationComponents,
    ],
    entryComponents: [
        entryComponents
    ],
    providers: [

    ]

})
export class SystemModule { }
