import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from './../../commons/common.module';
import { InputImageComponent } from './input-image.component';
import { InputImagesComponent } from './input-images.component';
import { InputVideoComponent } from './input-video.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        InputImageComponent,
        InputImagesComponent,
        InputVideoComponent,
    ],
    exports: [
        FormsModule,
        CommonModule,
        InputImageComponent,
        InputImagesComponent,
        InputVideoComponent,
    ]
})
export class UploadModule { }
