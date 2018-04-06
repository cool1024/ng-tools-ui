import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*tool-ui*/
import {
    ChartModule,
    MapModule,
    PrismModule,
} from 'ng-tools-ui';

/*路由模块*/
import { DemoRoutingModule } from './demo.routing';

/*页面组件*/
import { ChartComponent } from './pages/chart/chart.component';
import { EditorComponent } from './pages/editor/editor.component';
import { MapComponent } from './pages/map/map.component';
import { CodeComponent } from './pages/code/code.component';
import { EChartModule } from '../../../_tools-ui';

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
        ChartComponent,
        CodeComponent,
        MapComponent,
        EditorComponent,
    ]
})
export class DemoModule { }
