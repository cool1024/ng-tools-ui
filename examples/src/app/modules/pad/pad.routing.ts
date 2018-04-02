import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './pages/tab/tab.component';
import { CollapseComponent } from './pages/collapse/collapse.component';

const routes: Routes = [
    { path: 'tab', component: TabComponent },
    { path: 'collapse', component: CollapseComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PadRoutingModule { }
