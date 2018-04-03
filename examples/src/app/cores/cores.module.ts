import { NgModule, ModuleWithProviders } from '@angular/core';

import { MenuService } from './services/menu.service';
import { ThemeService } from './services/theme.service';
import { FormService } from './services/form.service';

@NgModule()
export class CoreModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                MenuService,
                ThemeService,
                FormService,
            ]
        };
    }
}
