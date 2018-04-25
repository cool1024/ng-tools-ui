import { GoodsType } from './../interfaces/goods-type.interface';
export class GoodsTypeItem {

    childTypes: GoodsType[];

    isSaved: boolean;

    constructor(public mainType: GoodsType) {
        this.isSaved = true;
        this.childTypes = new Array<GoodsType>();
    }

    append(goodType: GoodsType) {
        goodType.parentId = this.mainType.id;
        this.childTypes.push(goodType);
    }

    setEdit() {
        this.isSaved = false;
    }

    setSave() {
        this.isSaved = true;
    }

}
