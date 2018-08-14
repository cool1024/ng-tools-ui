import { Injectable } from '@angular/core';
import { MenuItem } from './menu.interface';

@Injectable()
export class MenuPushService {

    private _items: MenuItem[];

    private defaultItem: MenuItem;

    private maxItemNum: number;

    get items(): MenuItem[] {
        if (this._items.length > this.maxItemNum) {
            this._items.shift();
        }
        return !!this.defaultItem ? [this.defaultItem].concat(this._items) : this._items;
    }

    constructor() {
        this._items = new Array<MenuItem>();
        this.maxItemNum = 6;
    }

    push(...items: MenuItem[]) {
        items.forEach(item => {
            this._items.push({
                title: item.title,
                url: item.url,
                active: false,
            });
        });
    }

    cleanAll() {
        this._items = [];
    }

    setActive(item: MenuItem) {
        this.cleanAllActive();
        if (!!this.defaultItem && this.defaultItem.url === item.url && this.defaultItem.title === item.title) {
            this.defaultItem.active = true;
        } else {
            const index = this._items.findIndex(e => e.url === item.url && e.title === item.title);
            if (index >= 0) {
                this._items[index].active = true;
            } else {
                this.push(item);
                this._items[this._items.length - 1].active = true;
            }
            if (!!this.defaultItem) { this.defaultItem.active = false; }
        }
    }

    cleanAllActive() {
        this._items.forEach(item => item.active = false);
    }

    setMaxItemNum(maxItemNum: number) {
        this.maxItemNum = maxItemNum;
    }

    setDefaultItem(item: MenuItem) {
        this.defaultItem = item;
    }
}
