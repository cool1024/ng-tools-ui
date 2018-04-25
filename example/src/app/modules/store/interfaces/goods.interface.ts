import { GoodsType } from './goods-type.interface';


export interface GoodsSpecifications {
    id?: number;
    specificationName: string;
    colorName?: string;
    price?: number;
    stocks?: number;
}

export interface GoodsSpecification {
    specificationTitle: string;
    specificationNames: string[];
}

export interface Goods {
    id?: number;
    goodsPrice?: number;
    goodsStocks?: number;
    goodsType?: GoodsType;
    goodsSpecifications?: GoodsSpecifications[];
    goodsThumb?: string;
    goodsImages?: string;
    goodsDetail?: string;
    goodsName: string;
    isActive: number;
}

