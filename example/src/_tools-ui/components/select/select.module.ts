import { NgModule } from '@angular/core';
import { DropdownModule } from './../dropdown/dropdown.module';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select.component';
import { SelectsComponent } from './selects.component';

@NgModule({
    imports: [
        DropdownModule,
        FormsModule,
    ],
    declarations: [
        SelectComponent,
        SelectsComponent,
    ],
    exports: [
        DropdownModule,
        FormsModule,
        SelectComponent,
        SelectsComponent,
    ]
})
export class SelectModule { }
