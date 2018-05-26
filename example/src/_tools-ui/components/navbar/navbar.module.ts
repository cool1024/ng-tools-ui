import { NgModule } from '@angular/core';
import { CommonModule } from './../../commons/common.module';
import { NavbarDirective, NavListDirective, NavbarMenuDirective, NavBrandDirective } from './navbar.directive';
import { NavBreadcrumbComponent } from './nav-breadcrumb.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        NavbarDirective,
        NavBrandDirective,
        NavListDirective,
        NavbarMenuDirective,
        NavBreadcrumbComponent
    ],
    exports: [
        CommonModule,
        NavbarDirective,
        NavbarMenuDirective,
        NavBrandDirective,
        NavListDirective,
        NavBreadcrumbComponent
    ]
})
export class NavbarModule {

}
