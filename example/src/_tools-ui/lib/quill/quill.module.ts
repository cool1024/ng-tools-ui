import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillComponent } from './quill.component';
import { ScriptService } from './../../commons/services/script.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        QuillComponent,
    ],
    exports: [
        CommonModule,
        QuillComponent
    ],
    providers: [
        ScriptService
    ]
})
export class QuillModule {

    static forChild(srcs: string[]): ModuleWithProviders {
        return {
            ngModule: QuillModule,
            providers: [
                { provide: 'QUILL_SCRIPT_SRCS', useValue: srcs }
            ]
        };
    }

    static forRoot(srcs: string[]): ModuleWithProviders {
        return {
            ngModule: QuillModule,
            providers: [
                { provide: 'QUILL_SCRIPT_SRCS', useValue: srcs }
            ]
        };
    }
}
