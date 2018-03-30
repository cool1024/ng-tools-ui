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
} from 'ng-tools-ui';
// import {
//     ButtonModule,
//     NavbarModule,
//     MenuModule,
//     CssloadModule,
//     DropdownModule,
// } from './../tools-ui';
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule.forRoot(),
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
