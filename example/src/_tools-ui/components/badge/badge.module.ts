import { NgModule } from '@angular/core';
import { CommonModule } from './../../commons/common.module';
import { BadgeComponent } from './badge.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        BadgeComponent,
    ],
    exports: [
        BadgeComponent,
    ]
})
export class BadgeModule { }
