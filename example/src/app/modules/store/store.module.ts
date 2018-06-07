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
import { BannerService } from './services/banner.service';
import { SortablejsModule } from 'angular-sortablejs';

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
        SortablejsModule,
    ],
    declarations: [declarationComponents],
    entryComponents: [entryComponents],
    providers: [
        UserService,
        GoodsTypeService,
        GoodsService,
        OrderService,
        BannerService,
    ]
})
export class StoreModule { }
