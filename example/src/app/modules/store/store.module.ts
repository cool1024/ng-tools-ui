import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    CollapseModule,
    ButtonModule,
    ConfirmModule,
    DatePickerModule,
    PaginationModule,
    CssloadModule,
    UploadModule,
    CheckboxModule,
    TabModule,
    ImageModule,
} from 'ng-tools-ui';

import { StoreRoutingModule, declarationComponents } from './store.routing';
import { UserService } from './services/user.service';
import { GoodsTypeService } from './services/goods-type.service';
import { GoodsService } from './services/goods.service';
import { OrderService } from './services/order.service';

@NgModule({
    imports: [
        FormsModule,
        ButtonModule,
        ConfirmModule,
        DatePickerModule,
        PaginationModule,
        CollapseModule,
        CssloadModule,
        UploadModule,
        CheckboxModule,
        TabModule,
        ImageModule,
        StoreRoutingModule,
    ],
    declarations: [declarationComponents],
    providers: [
        UserService,
        GoodsTypeService,
        GoodsService,
        OrderService,
    ]
})
export class StoreModule { }
