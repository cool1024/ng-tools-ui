import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptService } from './../../commons/services/script.service';
import { BaseEchartDirective } from './echart.directive';

declare const window: any;

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BaseEchartDirective
    ],
    exports: [
        CommonModule,
        BaseEchartDirective
    ],
    providers: [
        ScriptService
    ]
})
export class EChartModule { }
