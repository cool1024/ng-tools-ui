import { NgModule } from '@angular/core';
import { CommonModule } from './../../commons/common.module';
import { PrismComponent } from './prism.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PrismComponent
    ],
    exports: [
        PrismComponent,
        CommonModule,
    ]
})
export class PrismModule { }
