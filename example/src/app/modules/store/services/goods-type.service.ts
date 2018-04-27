/**
 * 商品类型服务
 *
 * @file   GoodsTypeService.ts
 * @author xiaojian
 * @date   2018-04-22
 */
import { Injectable } from '@angular/core';
import { RequestService } from '../../../cores/services/request.service';
import { ApiData } from '../../../cores/classes/api-data.class';
import { SearchParams } from '../../../cores/classes/search-params';
import { Observable } from 'rxjs/Observable';
import { Pagination } from 'ng-tools-ui';
import { GoodsTypeItem } from './../classes/goods-type-item.class';

@Injectable()
export class GoodsTypeService {

    constructor(private request: RequestService) { }

    /**
     * 获取商品类型列表
     */
    listGoodsType(): Observable<ApiData> {
        return this.request.url('/store/goodstype/list');
    }


    /**
     * 保存商品类型
     */
    saveGoodsType(goodsTypeItem: GoodsTypeItem): Observable<ApiData> {
        return this.request.put('/store/goodstype/save', goodsTypeItem.getDataParams());
    }

    /**
     * 删除商品类型
     */
    deleteGoodsType(goodsTypeId: number): Observable<ApiData> {
        return this.request.delete('/store/goodstype/delete', { goodsTypeId });
    }

}
