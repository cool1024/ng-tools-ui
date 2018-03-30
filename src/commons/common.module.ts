import { NgModule } from '@angular/core';
import { CommonModule as BaseModule } from '@angular/common';
import { ToggleDirective } from './directives/toggle.directives';
import { HtmlDomService } from './../commons/services/htmldom.service';

@NgModule({
    imports: [
        BaseModule,
    ],
    declarations: [
        ToggleDirective
    ],
    exports: [
        ToggleDirective,
        BaseModule,
    ],
    providers: [
        HtmlDomService
    ],
})
export class CommonModule { }
