import { Component, OnInit } from '@angular/core';
import {
    Router,
    RouteConfigLoadStart,
    NavigationEnd
} from '@angular/router';
import {
    MenuModel,
    MenuGroup,
    MenuItem,
    ConfirmService,
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

    menuItems = new Array<MenuItem>();

    homeItem: MenuItem;

    menuConfig = AppConfig.MENU_CONFIG;

    themes = AppConfig.THEME_COLORS;

    get menuModels(): Array<MenuModel> {
        return this.menu.menuModels;
    }

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
        private menu: MenuService,
    ) {
        this.global.loadStrFromStorage('color', 'primary');
        this.global.setValues({
            'lazyload': true,
            'tokencheck': true,
            'showmenu': true,
        });
        this.menuPush.setDefaultItem({ title: '首页', url: '/' });
    }

    ngOnInit() {
        // 监听路由惰性加载状态
        this.router.events.subscribe(event => {
            if (event instanceof RouteConfigLoadStart) {
                this.global.setValue('lazyload', true);
            } else if (event instanceof NavigationEnd) {
                this.global.setValue('lazyload', false);
            }
        });

        // 设置登入状态
        this.global.setValue('loginStatus', false);

        // 载入菜单数据
        this.menu.loadMenu().subscribe(() => {
            this.global.setValue('tokencheck', false);
        });

        // 载入用户信息
        this.auth.loadUserDeail();
    }

    toggleMenu() {
        this.global.setValue('showmenu', !this.global.getValue('showmenu', false));
    }

    changeTheme(color: string) {
        this.global.setValue('color', color);
        this.global.setValueToStorage('color', color);
    }

    signOut() {
        this.confirm.warning('退出登入', '您确认要退出当前的账户吗？')
            .subscribe(() => this.auth.setOutAndClean());
    }

    goPage(menu: MenuItem) {
        this.router.navigateByUrl(menu.url);
        this.menuPush.setActive(menu);
    }

    setPage(menu: MenuItem) {
        this.router.navigateByUrl(menu.url);
    }
}
