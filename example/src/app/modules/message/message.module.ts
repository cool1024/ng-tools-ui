import { NgModule } from '@angular/core';
import { ModalModule } from 'ng-tools-ui';

/*路由模块*/
import { MessageRoutingModule } from './message.routing';

/*页面组件*/
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { ModalComponent } from './pages/confirm/modal.component';

@NgModule({
    imports: [
        ModalModule,
        MessageRoutingModule,
    ],
    declarations: [
        ConfirmComponent,
        ModalComponent,
    ],
    entryComponents: [
        ModalComponent
    ]
})
export class MessageModule { }
