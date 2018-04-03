import { NgModule } from '@angular/core';
import { CommonModule } from './../../commons/common.module';
import { MenuComponent } from './menu.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        MenuComponent,
    ],
    exports: [
        CommonModule,
        MenuComponent,
    ]
})
export class MenuModule { }
