import { NgModule } from '@angular/core';
import { CommonModule } from './../../commons/common.module';
import { CssloadComponent } from './cssload.component';
import { TableLoadComponent } from './table-load.component';


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        CssloadComponent,
        TableLoadComponent
    ],
    exports: [
        CommonModule,
        CssloadComponent,
        TableLoadComponent,
    ]
})
export class CssloadModule { }
