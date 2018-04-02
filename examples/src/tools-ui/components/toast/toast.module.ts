import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from './../../commons/common.module';
import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ToastComponent
    ],
    exports: [
        CommonModule,
        ToastComponent,
    ],
    entryComponents: [
        ToastComponent,
    ]
})
export class ToastModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ToastModule,
            providers: [
                ToastService,
            ]
        };
    }
}
