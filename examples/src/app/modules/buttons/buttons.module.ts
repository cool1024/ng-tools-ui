import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*tool-ui*/
import {
    ButtonModule,
    CollapseModule,
    TabModule,
    PrismModule,
    // PaginationModule,
} from 'ng-tools-ui';

import {
    PaginationModule
} from './../../../_tools-ui';

/*路由模块*/
import { ButtonsRoutingModule } from './buttons.routing';

/*页面组件*/
import { SimpleComponent } from './pages/simple/simple.component';
import { PaginationComponent } from './pages/pagination/pagination.component';

@NgModule({
    imports: [
        FormsModule,
        ButtonModule,
        CollapseModule,
        TabModule,
        PrismModule,
        PaginationModule,
        ButtonsRoutingModule,
    ],
    declarations: [
        SimpleComponent,
        PaginationComponent,
    ]
})
export class ButtonsModule { }
