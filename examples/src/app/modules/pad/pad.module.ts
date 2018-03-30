import { NgModule } from '@angular/core';
import { PadRoutingModule } from './pad.routing';
import { TabModule } from './../../../tools-ui';
import { TabComponent } from './pages/tab/tab.component';

@NgModule({
    imports: [
        TabModule,
        PadRoutingModule,
    ],
    declarations: [
        TabComponent
    ]
})
export class PadModule { }
