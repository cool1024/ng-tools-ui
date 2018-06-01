import { NgModule } from '@angular/core';
import { CommonModule } from './../../commons/common.module';
import { NavbarDirective, NavListDirective, NavBrandDirective } from './navbar.directive';
import { NavBreadcrumbComponent } from './nav-breadcrumb.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        NavbarDirective,
        NavBrandDirective,
        NavListDirective,
        NavBreadcrumbComponent
    ],
    exports: [
        CommonModule,
        NavbarDirective,
        NavBrandDirective,
        NavListDirective,
        NavBreadcrumbComponent
    ]
})
export class NavbarModule {

}
