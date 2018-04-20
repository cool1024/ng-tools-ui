import { NgModule } from '@angular/core';
import { CommonModule } from './../../commons/common.module';
import { MenuComponent } from './menu.component';
import { MenuPushComponent } from './menu-push.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        MenuComponent,
        MenuPushComponent,
    ],
    exports: [
        CommonModule,
        MenuComponent,
        MenuPushComponent,
    ]
})
export class MenuModule { }
