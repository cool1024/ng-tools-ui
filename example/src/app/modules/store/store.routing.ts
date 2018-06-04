import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodsTypesComponent } from './pages/goods-types/goods-types.component';
import { GoodsTableComponent } from './pages/goods-table/goods-table.component';
import { GoodsDetailComponent } from './pages/goods-detail/goods-detail.component';
import { OrderTableComponent } from './pages/order-table/order-table.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { UserTableComponent } from './pages/user-table/user-table.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { BannerManagerComponent } from './pages/banner-manager/banner-manager.component';
import { BannerDetailComponent } from './pages/banner-manager/banner-detail.component';

const routes: Routes = [
    {
        path: 'goods',
        component: GoodsTableComponent,
        children: [
            { path: 'detail', component: GoodsDetailComponent },
            { path: 'detail/:id', component: GoodsDetailComponent },
        ]
    },
    {
        path: 'types',
        component: GoodsTypesComponent,
    },
    {
        path: 'order',
        component: OrderTableComponent,
        children: [
            { path: 'detail/:id', component: OrderDetailComponent },
        ]
    },
    {
        path: 'user',
        component: UserTableComponent,
        children: [
            { path: 'detail/:id', component: UserDetailComponent },
        ]
    },
    {
        path: 'banner',
        component: BannerManagerComponent,
    }
];

export const declarationComponents = [
    GoodsTypesComponent,
    GoodsTableComponent,
    GoodsDetailComponent,
    OrderTableComponent,
    OrderDetailComponent,
    UserTableComponent,
    UserDetailComponent,
    BannerManagerComponent,
    BannerDetailComponent,
];

export const entryComponents = [
    BannerDetailComponent,
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class StoreRoutingModule { }
