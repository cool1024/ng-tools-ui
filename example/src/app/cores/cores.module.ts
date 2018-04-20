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
                MenuService,
                GlobalService,
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
