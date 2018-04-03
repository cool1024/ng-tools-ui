import { NgModule } from '@angular/core';
import { CommonModule } from './../../commons/common.module';
import { CssloadComponent } from './cssload.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        CssloadComponent,
    ],
    exports: [
        CommonModule,
        CssloadComponent,
    ]
})
export class CssloadModule { }
