import { Component, OnInit } from '@angular/core';
import {
    Router,
    RouteConfigLoadStart,
    RouteConfigLoadEnd
} from '@angular/router';
import {
    Pagination,
    Breadcrumb,
    MenuModel,
    MenuGroup,
    MenuItem,
    MenuPushService
} from 'ng-tools-ui';
import { MenuService, RequestService, GlobalService, AuthService } from './cores/services';
import { AppConfig } from './configs/app.config';
import { interval } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    menuModels = new Array<MenuModel>();

    avatars: [string, string, string];

    menuItems = new Array<MenuItem>();

    homeItem: MenuItem;

    menuConfig = AppConfig.MENU_CONFIG;

    themes = AppConfig.THEME_COLORS;

    breadcrumbs: Breadcrumb[];

    constructor(
        private router: Router,
        private menuCtrl: MenuService,
        public global: GlobalService,
        public menuPush: MenuPushService,
        public auth: AuthService,
        private request: RequestService,
    ) {
        this.global.loadStrFromStorage('color', 'primary');
        this.global.setValue('lazyload', false);
        this.avatars = [
            'assets/images/avatar/5.jpg',
            '系统管理员',
            'www.cool1024.com'
        ];
        this.breadcrumbs = [
            { title: '首页', icon: 'fa fa-fw fa-home', url: '/home' },
            { title: '列表页面', icon: 'fa fa-fw fa-list-ul', url: '/home' },
            { title: '文件夹', icon: 'fa fa-fw fa-folder', url: '/home' }
        ];
        this.menuPush.setDefaultItem({
            title: '首页',
            url: '/'
        });
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

        // 获取登入状态
        this.global.setValue('loginStatus', false);

        this.loadMenu();
    }

    loadMenu() {
        // let menus: any[] = [];
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
        this.auth.setOut();
    }

    goPage(menu: MenuItem) {
        this.router.navigateByUrl(menu.url);
        this.menuPush.setActive(menu);
    }

    setPage(menu: MenuItem) {
        this.router.navigateByUrl(menu.url);
    }
}
