import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule, declarationComponents } from './dashboard.routing';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        DashboardRoutingModule
    ],
    declarations: [declarationComponents]
})
export class DashboardModule {

}
