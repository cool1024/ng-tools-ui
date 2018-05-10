import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule, declarationComponents } from './dashboard.routing';
import { ButtonModule } from 'ng-tools-ui';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        DashboardRoutingModule,
        ButtonModule,
    ],
    declarations: [declarationComponents]
})
export class DashboardModule {

}
