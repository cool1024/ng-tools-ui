import { NgModule } from '@angular/core';
import { CommonModule } from './../../commons/common.module';
import { TabsDirective, TabDirective } from './tab.directive';
import { TabComponent } from './tab.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        TabsDirective,
        TabDirective,
        TabComponent,
    ],
    exports: [
        CommonModule,
        TabsDirective,
        TabDirective,
        TabComponent,
    ]
})
export class TabModule { }
