import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CkeditorComponent } from './ckeditor.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CkeditorComponent,
    ],
    exports: [
        CommonModule,
        CkeditorComponent
    ]
})
export class CkeditorModule {
    constructor() { }
}
