import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
        BrowserModule,
        HttpClientModule
    ]
})
export class CoreModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                FormService,
                MenuService,
                GlobalService,
                RequestService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ErrorInterceptor,
                    multi: true,
                },
                AuthService,
                GuardService,
            ]
        };
    }
}
