import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*tool-ui*/
import {
    ChartModule,
    MapModule,
    PrismModule,
    EChartModule,
    CkeditorModule,
} from 'ng-tools-ui';
import { QuillModule } from './../../../_tools-ui';
/*路由模块*/
import { DemoRoutingModule, declarationComponents } from './demo.routing';

@NgModule({
    imports: [
        FormsModule,
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
