import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './pages/chart/chart.component';
import { MapComponent } from './pages/map/map.component';
import { CodeComponent } from './pages/code/code.component';
import { EchartComponent } from './pages/echart/echart.component';
import { EditComponent } from './pages/edit/edit.component';


const routes: Routes = [
    { path: 'chart', component: ChartComponent },
    { path: 'map', component: MapComponent },
    { path: 'code', component: CodeComponent },
    { path: 'echart', component: EchartComponent },
    { path: 'ckedit', component: EditComponent },
];

export const declarationComponents = [
    ChartComponent,
    CodeComponent,
    MapComponent,
    EchartComponent,
    EditComponent,
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class DemoRoutingModule { }
