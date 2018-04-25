import { Goods } from './goods.interface';
import { User } from './user.interface';

export interface Order {
    id: number;
    ordersn: string;
    user: User;
    goodsList?: Goods[];
    orderPay: number;
    createdAt: string;
    updatedAt: string;
}

