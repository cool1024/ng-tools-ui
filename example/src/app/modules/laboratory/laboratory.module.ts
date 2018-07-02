/**
 * 实验室模块
 *
 * @author xiaojian
 * @file   laboratory.module.ts
 * @date   2018-6-26 21:12:51
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LaboratoryRoutingModule, declarationComponents, entryComponents, providers } from './laboratory.routing';
import { ButtonModule, BadgeModule, ImageModule, CssloadModule, DropdownModule } from 'ng-tools-ui';
import { DatePickerModule } from './../../../_tools-ui';
@NgModule({
    imports: [
        FormsModule,
        ButtonModule,
        DropdownModule,
        BadgeModule,
        ImageModule,
        CssloadModule,
        DatePickerModule,
        LaboratoryRoutingModule,
    ],
    declarations: [declarationComponents],
    entryComponents: [entryComponents],
    providers: [providers]
})
export class LaboratoryModule { }
