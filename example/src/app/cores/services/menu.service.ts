import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import {
    Pagination,
    MenuModel,
    MenuGroup,
    MenuItem,
} from 'ng-tools-ui';
@Injectable()
export class MenuService {

    menuModels = new Array<MenuModel>();

    constructor(private request: RequestService) { }

    /**
     * 加载系统菜单
     */
    loadMenu() {
        this.request.url('/managerapi/menu')
            .subscribe(res => {
                const menus = res.datas;
                menus.forEach(model => {
                    const menuModel = {
                        modelTitle: model.title,
                        menuGroups: new Array<MenuGroup>(),
                        active: false
                    };
                    model.menus.forEach(menu => {
                        const menuGroup: MenuGroup = {
                            groupTitle: menu.title,
                            icon: menu.icon,
                            image: menu.image,
                            menuItems: new Array<MenuItem>(),
                            targetModel: menuModel,
                            active: false
                        };
                        menu.children.forEach(child => {
                            const menuItem: MenuItem = {
                                title: child.title,
                                url: child.url,
                                targetGroup: menuGroup,
                                active: false
                            };

                            menuGroup.menuItems.push(menuItem);
                        });
                        menuModel.menuGroups.push(menuGroup);
                    });
                    this.menuModels.push(menuModel);
                });
            });

    }
}
