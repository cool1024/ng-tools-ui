import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from './../../commons/common.module';
import { ConfirmComponent } from './confirm.component';
import { ConfirmService } from './confirm.service';
import { ConfirmOptions } from './confirm.interface';
import { DefaultConfig, ConfirmConfig } from './confirm.data';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ConfirmComponent,
    ],
    exports: [
        CommonModule,
        ConfirmComponent,
    ],
    entryComponents: [
        ConfirmComponent,
    ]
})
export class ConfirmModule {
    static forRoot(options?: ConfirmOptions): ModuleWithProviders {
        return {
            ngModule: ConfirmModule,
            providers: [
                ConfirmService,
                { provide: ConfirmConfig, useValue: options || DefaultConfig }
            ]
        };
    }
}
