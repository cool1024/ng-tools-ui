import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from './../../commons/common.module';
import { LoopCardComponent } from './loop-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        LoopCardComponent,
    ],
    exports: [
        CommonModule,
        FormsModule,
        LoopCardComponent,
    ]
})
export class LoopCardModule { }
