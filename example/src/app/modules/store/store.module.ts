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
    ModalModule,
} from 'ng-tools-ui';

import { StoreRoutingModule, declarationComponents, entryComponents } from './store.routing';
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
        ModalModule,
        StoreRoutingModule,
    ],
    declarations: [declarationComponents],
    entryComponents: [entryComponents],
    providers: [
        UserService,
        GoodsTypeService,
        GoodsService,
        OrderService,
    ]
})
export class StoreModule { }
