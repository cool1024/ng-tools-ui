import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from './../../commons/common.module';
import { MenuComponent } from './menu.component';
import { MenuPushComponent } from './menu-push.component';
import { MenuPushService } from './menu-push.service';

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
export class MenuModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MenuModule,
            providers: [
                MenuPushService,
            ]
        };
    }
}
