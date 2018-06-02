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

/*路由模块*/
import { DemoRoutingModule, declarationComponents } from './demo.routing';
import { QuillModule } from '../../../_tools-ui';


@NgModule({
    imports: [
        FormsModule,
        ChartModule,
        DemoRoutingModule,
        MapModule,
        PrismModule,
        EChartModule,
        CkeditorModule,
        QuillModule.forChild([]),
    ],
    declarations: [
        declarationComponents
    ]
})
export class DemoModule { }
