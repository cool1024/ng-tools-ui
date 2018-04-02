import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './cores/cores.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AppRoutingModule } from './app.routing';
import {
    ButtonModule,
    NavbarModule,
    MenuModule,
    CssloadModule,
    DropdownModule,
    ConfirmModule,
    ToastModule
} from 'ng-tools-ui';

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
        ToastModule.forRoot(),
        ButtonModule,
        NavbarModule,
        MenuModule,
        CssloadModule,
        DropdownModule,
        HttpClientModule,
        DashboardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
