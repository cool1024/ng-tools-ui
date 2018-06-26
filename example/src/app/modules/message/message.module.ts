import { NgModule } from '@angular/core';
import { ModalModule, WindowModule } from 'ng-tools-ui';
/*路由模块*/
import { MessageRoutingModule } from './message.routing';

/*页面组件*/
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { ModalComponent } from './pages/confirm/modal.component';
import { WindowComponent } from './pages/confirm/window.component';

@NgModule({
    imports: [
        ModalModule,
        WindowModule,
        MessageRoutingModule,
    ],
    declarations: [
        ConfirmComponent,
        ModalComponent,
        WindowComponent,
    ],
    entryComponents: [
        ModalComponent,
        WindowComponent,
    ]
})
export class MessageModule { }
