import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*tool-ui*/
import {
    ButtonModule,
} from 'ng-tools-ui';

/*路由模块*/
import { ButtonsRoutingModule } from './buttons.routing';

/*页面组件*/
import { SimpleComponent } from './pages/simple/simple.component';

@NgModule({
    imports: [
        FormsModule,
        ButtonModule,
        ButtonsRoutingModule,
    ],
    declarations: [
        SimpleComponent,
    ]
})
export class ButtonsModule { }
