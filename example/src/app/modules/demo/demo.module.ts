import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*tool-ui*/
import {
    ChartModule,
    MapModule,
    PrismModule,
    // EChartModule,
    CkeditorModule,
    ButtonModule,
    QuillModule,
} from 'ng-tools-ui';
/*路由模块*/
import { DemoRoutingModule, declarationComponents } from './demo.routing';
import { EChartModule } from './../../../_tools-ui';
@NgModule({
    imports: [
        FormsModule,
        ButtonModule,
        ChartModule,
        DemoRoutingModule,
        PrismModule,
        MapModule.forChild('bea16ad29a10b04e05e0624362d504dc'),
        EChartModule.forChild('assets/echart/echarts.common.min.js'),
        QuillModule.forChild(['assets/quill/quill.min.js']),
    ],
    declarations: [
        declarationComponents
    ]
})
export class DemoModule { }
