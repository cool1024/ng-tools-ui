import { NgModule } from '@angular/core';

/*tool-ui*/
import {
    UploadModule as TSUploadModule,
    ProgressModule,
    PrismModule,
    TabModule,
    CollapseModule,
    ButtonModule,
    // ModalModule,
} from 'ng-tools-ui';
import { ModalModule } from './../../../_tools-ui';

/*路由模块*/
import { UploadRoutingModule } from './upload.routing';

/*页面组件*/
import { SimpleComponent } from './pages/simple/simple.component';
import { VideoComponent } from './pages/video/video.component';
import { ViewComponent } from './pages/simple/view.component';


@NgModule({
    imports: [
        UploadRoutingModule,
        TSUploadModule,
        ProgressModule,
        PrismModule,
        TabModule,
        ModalModule,
        ButtonModule,
        CollapseModule,
    ],
    declarations: [
        SimpleComponent,
        VideoComponent,
        ViewComponent,
    ],
    entryComponents: [
        ViewComponent,
    ]
})
export class UploadModule { }
