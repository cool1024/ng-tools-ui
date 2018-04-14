import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './cores/cores.module';
// import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AppRoutingModule } from './app.routing';
import {
    NavbarModule,
    // MenuModule,
    CssloadModule,
    // DropdownModule,
    ConfirmModule,
    ToastModule,
    MapModule,
    ButtonModule,
} from 'ng-tools-ui';

import { MenuModule, DropdownModule } from './../_tools-ui';

import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule.forRoot(),
        ConfirmModule.forRoot({ okTitle: '确认', cancelTitle: '取消' }),
        MapModule.forRoot('bea16ad29a10b04e05e0624362d504dc'),
        ToastModule.forRoot(),
        ButtonModule,
        NavbarModule,
        MenuModule,
        CssloadModule,
        DropdownModule,
        HttpClientModule,
        // DashboardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
