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
import { AdminRoutingModule, declarationComponents, entryComponents } from './admin.routing';
import { CompanyService } from './services/company.service';

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
        AdminRoutingModule,
    ],
    declarations: [
        declarationComponents,
    ],
    entryComponents: [
        entryComponents
    ],
    providers: [
        CompanyService
    ]

})
export class AdminModule { }
