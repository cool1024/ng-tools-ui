import { NgModule } from '@angular/core';
import { CommonModule } from './../../commons/common.module';
import { CollapseDirective } from './collapse.directive';
import { CollapsesDirective } from './collapses.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        CollapseDirective,
        CollapsesDirective,
    ],
    exports: [
        CommonModule,
        CollapseDirective,
        CollapsesDirective,
    ]
})
export class CollapseModule { }
