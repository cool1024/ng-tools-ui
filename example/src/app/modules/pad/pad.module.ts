import { NgModule } from '@angular/core';
import { PadRoutingModule } from './pad.routing';
import { TabModule, CollapseModule, PrismModule } from 'ng-tools-ui';
import { TabComponent } from './pages/tab/tab.component';
import { CollapseComponent } from './pages/collapse/collapse.component';

@NgModule({
    imports: [
        TabModule,
        CollapseModule,
        PrismModule,
        PadRoutingModule,
    ],
    declarations: [
        TabComponent,
        CollapseComponent,
    ]
})
export class PadModule { }
