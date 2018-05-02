import { NgModule } from '@angular/core';
import { CoreModule } from './cores/cores.module';
import { AppRoutingModule } from './app.routing';
import {
    NavbarModule,
    MenuModule,
    CssloadModule,
    DropdownModule,
    ConfirmModule,
    ToastModule,
    MapModule,
    EChartModule,
    ButtonModule,
} from 'ng-tools-ui';

import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CoreModule.forRoot(),
        ConfirmModule.forRoot({ okTitle: '确认', cancelTitle: '取消' }),
        MapModule.forRoot('bea16ad29a10b04e05e0624362d504dc'),
        EChartModule.forRoot('assets/echart/echarts.common.min.js'),
        ToastModule.forRoot({ position: 'ts-bottom ts-right', timeout: 10000 }),
        ButtonModule,
        NavbarModule,
        MenuModule,
        CssloadModule,
        DropdownModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
