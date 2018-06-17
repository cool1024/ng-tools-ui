import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from './../../commons/common.module';
import { BadgeComponent } from './badge.component';
import { BadgesComponent } from './badges.component';
// import { BadgeSelectComponent } from './badge-select.component';
import { DropdownModule } from '../dropdown/dropdown.module';

@NgModule({
    imports: [
        CommonModule,
        DropdownModule,
        FormsModule,
    ],
    declarations: [
        BadgeComponent,
        BadgesComponent,
        // BadgeSelectComponent,
    ],
    exports: [
        BadgeComponent,
        BadgesComponent,
        // BadgeSelectComponent,
    ]
})
export class BadgeModule { }
