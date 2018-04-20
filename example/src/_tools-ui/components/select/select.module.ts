import { NgModule } from '@angular/core';
import { DropdownModule } from './../dropdown/dropdown.module';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select.component';

@NgModule({
    imports: [
        DropdownModule,
        FormsModule,
    ],
    declarations: [
        SelectComponent,
    ],
    exports: [
        DropdownModule,
        FormsModule,
        SelectComponent,
    ]
})
export class SelectModule { }
