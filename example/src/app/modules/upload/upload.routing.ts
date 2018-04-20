import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleComponent } from './pages/simple/simple.component';
import { VideoComponent } from './pages/video/video.component';


const routes: Routes = [
    { path: 'simple', component: SimpleComponent },
    { path: 'video', component: VideoComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class UploadRoutingModule { }
