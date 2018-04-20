import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CkeditorComponent } from './ckeditor.component';
import { ScriptService } from './../../commons/services/script.service';

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
    ],
    providers: [
        ScriptService
    ]
})
export class CkeditorModule {
    constructor() { }
}
