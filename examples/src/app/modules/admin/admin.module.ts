import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*tool-ui*/
import {
    ButtonModule,
    ModalModule,
    CkeditorModule,
    DatePickerModule,
    PaginationModule,
} from 'ng-tools-ui';


/*路由模块*/
import { AdminRoutingModule, declarationComponents, entryComponents } from './admin.routing';

@NgModule({
    imports: [
        FormsModule,
        ButtonModule,
        ModalModule,
        DatePickerModule,
        PaginationModule,
        AdminRoutingModule,
    ],
    declarations: [
        declarationComponents
    ],
    entryComponents: [
        entryComponents
    ]

})
export class AdminModule { }
