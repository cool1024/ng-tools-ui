import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pagination, MenuModel, MenuModule, MenuGroup, MenuItem, Breadcrumb } from 'ng-tools-ui';
import { MenuService } from './cores/services/menu.service';
import { Router } from '@angular/router';
import { ThemeService } from './cores/services/theme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    pagination = new Pagination();

    menuModels = new Array<MenuModel>();

    avatars: [string, string, string];

    menuItems = new Array<MenuItem>();

    breadcrumbs: Breadcrumb[];

    constructor(
        private http: HttpClient,
        private router: Router,
        private menuCtrl: MenuService,
        public themeCtrl: ThemeService
    ) {
        this.pagination.total = 100;
        this.themeCtrl.setColor('primary');
        this.avatars = ['assets/images/avatar/5.jpg', '系统管理员', 'www.cool1024.com'];
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
        const menus: any[] = [
            {
                title: '平台模块',
                menus: [
                    {
                        icon: 'fa fa-cloud fa-fw',
                        title: '平台管理',
                        children: [
                            {
                                title: '商户管理',
                                url: '/admin/company',
                            },
                            {
                                title: '平台管理员',
                                url: '/admin/platform',
                            },
                            {
                                title: '平台账户',
                                url: '/admin/account',
                            }
                        ]
                    }
                ]
            }
        ];
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
        // this.http.get('assets/json/menu.json').subscribe(res => {
        //     if (res['result'] === true) {
        //         const menus: any[] = this.menuCtrl.transformMenu(res['datas']['groups'], res['datas']['models']);
        //         menus.forEach(model => {
        //             const menuModel = {
        //             this.h    modelTitle: model.title,
        //                 menuGroups: new Array<MenuGroup>(),
        //                 active: false
        //             };
        //             model.menus.forEach(menu => {
        //                 const menuGroup: MenuGroup = {
        //                     groupTitle: menu.title,
        //                     icon: menu.icon,
        //                     menuItems: new Array<MenuItem>(),
        //                     targetModel: menuModel,
        //                     active: false
        //                 };
        //                 menu.children.forEach(child => {
        //                     const menuItem: MenuItem = {
        //                         title: child.title,
        //                         url: child.url,
        //                         targetGroup: menuGroup,
        //                         active: false
        //                     };

        //                     menuGroup.menuItems.push(menuItem);
        //                 });
        //                 menuModel.menuGroups.push(menuGroup);
        //             });
        //             this.menuModels.push(menuModel);
        //         });
        //     }
        // });
    }

    changeTheme(color: string) {
        this.themeCtrl.setColor(color);
    }

    goPage(menu: MenuItem) {
        this.router.navigateByUrl(menu.url);
        this.menuItems.push(menu);
    }

    setPage(menu: MenuItem) {
        this.router.navigateByUrl(menu.url);
    }
}
