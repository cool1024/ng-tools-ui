import { NgModule, ModuleWithProviders } from '@angular/core';
import { MenuService } from './services/menu.service';
import { ThemeService } from './services/theme.service';
import { FormService } from './services/form.service';
import { RequestService } from './services/request.service';
import { ErrorInterceptor } from './services/error-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule()
export class CoreModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                MenuService,
                ThemeService,
                FormService,
                RequestService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ErrorInterceptor,
                    multi: true,
                }
            ]
        };
    }
}
