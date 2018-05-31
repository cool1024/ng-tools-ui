import { NgModule } from '@angular/core';
import { CoreModule } from './cores/cores.module';
import { AppRoutingModule } from './app.routing';
import {
    // NavbarModule,
    CssloadModule,
    DropdownModule,
    ConfirmModule,
    ToastModule,
    MapModule,
    EChartModule,
    CkeditorModule,
    // MenuModule,
} from 'ng-tools-ui';

import { AppComponent } from './app.component';

import { MenuModule, NavbarModule } from './../_tools-ui';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CoreModule.forRoot(),
        ConfirmModule.forRoot({ okTitle: '确认', cancelTitle: '取消' }),
        MapModule.forRoot('bea16ad29a10b04e05e0624362d504dc'),
        EChartModule.forRoot('assets/echart/echarts.common.min.js'),
        CkeditorModule.forRoot([
            'https://cdn.ckeditor.com/ckeditor5/10.0.1/classic/ckeditor.js',
            // 'https://cdn.ckeditor.com/ckeditor5/10.0.1/classic/translations/de.js'
            'assets/ckeditor5/zh_cn.js'
        ]),
        ToastModule.forRoot({ position: 'ts-bottom ts-right', timeout: 2000 }),
        MenuModule.forRoot(),
        NavbarModule,
        CssloadModule,
        DropdownModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
