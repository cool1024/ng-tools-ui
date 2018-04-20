import { NgModule, ModuleWithProviders } from '@angular/core';
import { DashboardRoutingModule } from './dashboard.routing';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        DashboardRoutingModule
    ],
    declarations: [
        ErrorComponent,
        HomeComponent,
    ]
})
export class DashboardModule {

}
