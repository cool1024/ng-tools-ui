import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import {
    MenuService,
    FormService,
    RequestService,
    ErrorInterceptor,
    GlobalService,
    GuardService,
    AuthService,
} from './services';

@NgModule({
    exports: [
        HttpClientModule,
        BrowserModule,
    ]
})
export class CoreModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                FormService,
                RequestService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ErrorInterceptor,
                    multi: true,
                },
                MenuService,
                GlobalService,
                AuthService,
                GuardService,
            ]
        };
    }
}
