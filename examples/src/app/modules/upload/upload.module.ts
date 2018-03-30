import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*tool-ui*/
import {
    UploadModule as TSUploadModule
} from './../../../tools-ui';

/*路由模块*/
import { UploadRoutingModule } from './upload.routing';

/*页面组件*/
import { SimpleComponent } from './pages/simple/simple.component';
import { VideoComponent } from './pages/video/video.component';

@NgModule({
    imports: [
        UploadRoutingModule,
        TSUploadModule,
    ],
    declarations: [
        SimpleComponent,
        VideoComponent,
    ],
})
export class UploadModule { }
