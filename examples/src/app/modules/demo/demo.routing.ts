import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './pages/chart/chart.component';
import { MapComponent } from './pages/map/map.component';
import { CodeComponent } from './pages/code/code.component';
import { EditorComponent } from './pages/editor/editor.component';


const routes: Routes = [
    {
        path: 'chart',
        component: ChartComponent,
    },
    {
        path: 'map',
        component: MapComponent,
    },
    {
        path: 'code',
        component: CodeComponent,
    },
    {
        path: 'edit',
        component: EditorComponent,
    },
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
