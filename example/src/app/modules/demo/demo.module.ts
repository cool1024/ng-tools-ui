import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*tool-ui*/
import {
    ChartModule,
    MapModule,
    PrismModule,
    EChartModule,
} from 'ng-tools-ui';

/*路由模块*/
import { DemoRoutingModule, declarationComponents } from './demo.routing';


@NgModule({
    imports: [
        FormsModule,
        ChartModule,
        DemoRoutingModule,
        MapModule,
        PrismModule,
        EChartModule
    ],
    declarations: [
        declarationComponents
    ]
})
export class DemoModule { }
