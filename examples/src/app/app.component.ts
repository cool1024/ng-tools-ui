import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pagination, MenuModel, MenuModule, MenuGroup, MenuItem, Breadcrumb } from 'ng-tools-ui';
import { MenuService } from './cores/services/menu.service';
import { Router } from '@angular/router';
import { ThemeService } from './cores/services/theme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    pagination = new Pagination();

    menuModels = new Array<MenuModel>();

    avatars: [string, string, string];

    breadcrumbs: Breadcrumb[];

    date = '2018/1/1';

    constructor(
        private http: HttpClient,
        private router: Router,
        private menuCtrl: MenuService,
        public themeCtrl: ThemeService

    ) {
        this.pagination.total = 100;
        this.avatars = ['assets/images/avatar.jpg', '系统管理员', 'www.cool1024.com'];
        this.breadcrumbs = [
            { title: '首页', icon: 'fa fa-fw fa-home', url: '/home' },
            { title: '列表页面', icon: 'fa fa-fw fa-list-ul', url: '/home' },
            { title: '文件夹', icon: 'fa fa-fw fa-folder', url: '/home' },
        ];
    }

    ngOnInit() {
        this.loadMenu();
    }

    loadMenu() {
        this.http.get('/assets/json/menu.json').subscribe(res => {
            if (res['result'] === true) {
                const menus: any[] = this.menuCtrl.transformMenu(res['datas']['groups'], res['datas']['models']);
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
            }
        });
    }

    changeTheme(color: string) {
        this.themeCtrl.setColor(color);
    }

    goPage(url: string) {
        this.router.navigateByUrl(url);
    }
}
