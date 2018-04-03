import { NgModule } from '@angular/core';
import { CommonModule } from './../../commons/common.module';
import { NavbarDirective } from './navbar.directive';
import { NavBrandDirective } from './nav-brand.directive';
import { NavListDirective } from './nav-list.directive';
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
