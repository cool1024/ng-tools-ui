import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import {
    Pagination,
    MenuModel,
    MenuGroup,
    MenuItem,
} from 'ng-tools-ui';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MenuService {

    menuModels = new Array<MenuModel>();

    constructor(private request: RequestService) { }

    /**
     * 加载系统菜单
     */
    loadMenu(): Observable<boolean> {
        const subject = new Subject<boolean>();
        this.request.url('/managerapi/menu', false)
            .subscribe(res => {

                // 发射轻轻结果消息
                subject.next(res.result);
                subject.complete();

                // 判断菜单是否加载成功
                if (res.result === false) { return; }

                // 清空当前菜单，避免多次重复加载
                this.menuModels = [];

                // 解析菜单数据
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
        return subject.asObservable();
    }
}
