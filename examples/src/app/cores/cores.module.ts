import { NgModule, ModuleWithProviders } from '@angular/core';

import { MenuService } from './services/menu.service';
import { ThemeService } from './services/theme.service';

@NgModule()
export class CoreModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                MenuService,
                ThemeService
            ]
        };
    }
}
