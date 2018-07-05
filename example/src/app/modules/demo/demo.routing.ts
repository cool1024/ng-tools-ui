import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './pages/map/map.component';
import { CodeComponent } from './pages/code/code.component';
import { EchartComponent } from './pages/echart/echart.component';
import { EditComponent } from './pages/edit/edit.component';


const routes: Routes = [
    { path: 'map', component: MapComponent },
    { path: 'code', component: CodeComponent },
    { path: 'echart', component: EchartComponent },
    { path: 'ckedit', component: EditComponent },
];

export const declarationComponents = [
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
