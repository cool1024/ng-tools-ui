import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*tool-ui*/
import {
    ImageModule,
    ButtonModule,
    DatePickerModule,
    PaginationModule,
    DropdownModule,
    CssloadModule,
} from 'ng-tools-ui';

/*路由模块*/
import { TableRoutingModule } from './table.routing';

/*页面组件*/
import { SimpleComponent } from './pages/simple/simple.component';

@NgModule({
    imports: [
        FormsModule,
        PaginationModule,
        ButtonModule,
        ImageModule,
        DatePickerModule,
        DropdownModule,
        CssloadModule,
        TableRoutingModule,
    ],
    declarations: [
        SimpleComponent,
    ]
})
export class TableModule { }
