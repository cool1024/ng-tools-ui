import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalDirective } from './modal.directive';
import { ModalService } from './modal.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ModalComponent,
        ModalDirective,
    ],
    entryComponents: [
        ModalComponent,
    ],
    providers: [
        ModalService,
    ],
    exports: [
        CommonModule
    ]
})
export class ModalModule { }
