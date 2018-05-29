import { Component, OnInit } from '@angular/core';
import {
    Router,
    RouteConfigLoadStart,
    RouteConfigLoadEnd
} from '@angular/router';
import {
    Pagination,
    MenuModel,
    MenuGroup,
    MenuItem,
    ConfirmService,
    // MenuPushService
} from 'ng-tools-ui';
import { MenuService, RequestService, GlobalService, AuthService } from './cores/services';
import { AppConfig } from './configs/app.config';
import { interval } from 'rxjs';
import { MenuPushService } from './../_tools-ui';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    menuModels = new Array<MenuModel>();

    menuItems = new Array<MenuItem>();

    homeItem: MenuItem;

    menuConfig = AppConfig.MENU_CONFIG;

    themes = AppConfig.THEME_COLORS;

    get avatars(): [string, string, string] {
        return [
            this.auth.user.avatar || 'assets/images/avatar/5.jpg',
            this.auth.user.role.roleName || '系统管理员',
            this.auth.user.account || 'www.cool1024.com'
        ];
    }

    constructor(
        private router: Router,
        private menuCtrl: MenuService,
        public global: GlobalService,
        public menuPush: MenuPushService,
        public auth: AuthService,
        private request: RequestService,
        private confirm: ConfirmService,
    ) {
        this.global.loadStrFromStorage('color', 'primary');
        this.global.setValue('lazyload', false);
    }

    ngOnInit() {
        // 监听路由惰性加载状态
        this.router.events.subscribe(event => {
            if (event instanceof RouteConfigLoadStart) {
                // 惰性加载开始，显示加载动画
                this.global.setValue('lazyload', true);
            } else if (event instanceof RouteConfigLoadEnd) {
                // 惰性加载结束，关闭加载动画
                interval(2000).subscribe(() => this.global.setValue('lazyload', false));
            }
        });

        // 设置登入状态
        this.global.setValue('loginStatus', false);

        // 载入菜单数据
        this.loadMenu();
    }

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

    changeTheme(color: string) {
        this.global.setValue('color', color);
        this.global.setValueToStorage('color', color);
    }

    signOut() {
        this.confirm.warning('退出登入', '您确认要退出当前的账户吗？')
            .subscribe(() => this.auth.setOut());
    }

    goPage(menu: MenuItem) {
        this.router.navigateByUrl(menu.url);
        this.menuPush.setActive(menu);
    }

    setPage(menu: MenuItem) {
        this.router.navigateByUrl(menu.url);
    }
}
