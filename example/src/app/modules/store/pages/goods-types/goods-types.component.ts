import { Component, OnInit } from '@angular/core';
import { GoodsTypeItem } from './../../classes/goods-type-item.class';
import { GoodsType } from '../../interfaces/goods-type.interface';
import { ConfirmService } from 'ng-tools-ui';

@Component({
    selector: 'app-goods-types',
    templateUrl: './goods-types.component.html',
    //   styleUrls: ['./goods-types.component.scss']
})
export class GoodsTypesComponent implements OnInit {

    list = new Array<GoodsTypeItem>();

    constructor(
        private confirm: ConfirmService
    ) { }

    ngOnInit() {

        this.list.push(
            new GoodsTypeItem({ id: 1, parentId: 0, goodsTypeTitle: '水果', createdAt: '2018-04-23' }),
            new GoodsTypeItem({ id: 2, parentId: 0, goodsTypeTitle: '家具', createdAt: '2018-04-24' }),
            new GoodsTypeItem({ id: 3, parentId: 0, goodsTypeTitle: '家用电器', createdAt: '2018-04-24' }),
        );
    }

    addChildType(typeItem: GoodsTypeItem) {
        typeItem.append({ goodsTypeTitle: '新增类型' });
        typeItem.setEdit();
    }

    deleteChildType(typeItem: GoodsTypeItem, index: number) {
        typeItem.childTypes.splice(index, 1);
        typeItem.setEdit();
    }

    addType() {
        const typeItem = new GoodsTypeItem({ goodsTypeTitle: '新增上级分类', createdAt: '暂无创建时间' });
        typeItem.setEdit();
        this.list.push(typeItem);
    }

    deleteType(typeItem: GoodsTypeItem, index: number) {
        this.confirm.danger('确认删除', `确认删除分类：'${typeItem.mainType.goodsTypeTitle}',分类下的所有子分类都会被删除!`)
            .subscribe(() => {
                this.list.splice(index, 1);
            });
    }

    confirmSave(typeItem: GoodsTypeItem) {
        typeItem.setSave();
    }

}
