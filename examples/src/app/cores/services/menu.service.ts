import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
    transformMenu(menus: Array<{ parentid: number, groups: Array<any> }>, models: { id: number, title: string }[]) {

        let mains: { parentid: number, groups: Array<any> };
        let mainIndex = -1;
        for (let i = 0; i < menus.length; i++) {
            if (menus[i].parentid === 0) {
                mains = menus[i];
                mainIndex = i;
                break;
            }
        }
        // not mains
        if (mainIndex < 0) {
            return [];
        }
        menus.splice(mainIndex, 1);
        const temps = new Array<{
            icon: string, mid: number, title: string, children: Array<{ icon: string, title: string, url: string }>
        }>();
        for (let i = 0; i < mains.groups.length; i++) {
            const temp = { icon: mains.groups[i].icon, mid: mains.groups[i].mid, title: mains.groups[i].title, children: [] };
            const childs = menus.filter(e => e.parentid.toString() === mains.groups[i].id.toString());
            temp.children = childs.length > 0 ? childs[0].groups : [];
            if (temp.children.length > 0) {
                temps.push(temp);
            }
        }
        const _menus = [];
        for (let i = 0; i < models.length; i++) {
            const _mains = temps.filter(main => main.mid.toString() === models[i].id.toString());
            if (_mains.length > 0) {
                _menus.push({ title: models[i].title, menus: _mains });
            }
        }
        return _menus;
    }
}
