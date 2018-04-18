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
                'title': '插件展示',
                'menus': [
                    {
                        'icon': 'fa fa-flickr fa-fw',
                        'mid': '1',
                        'title': '按钮示例',
                        'children': [
                            {
                                'parentid': 130,
                                'icon': '#',
                                'title': '普通按钮',
                                'url': '/buttons/simple',
                                'level': '1',
                                'permissionid': '0',
                                'mid': '1'
                            },
                            {
                                'parentid': 130,
                                'icon': '#',
                                'title': '分页按钮',
                                'url': '/buttons/page',
                                'level': '1',
                                'permissionid': '0',
                                'mid': '1'
                            }
                        ]
                    },
                    {
                        'icon': 'fa fa-table fa-fw',
                        'mid': '1',
                        'title': '表格示例',
                        'children': [
                            {
                                'parentid': 90,
                                'id': '91',
                                'icon': '#',
                                'title': '标准表格',
                                'url': '/table/simple',
                                'level': '1',
                                'permissionid': '0',
                                'mid': '1'
                            }
                        ]
                    },
                    {
                        'icon': 'fa fa-list-alt fa-fw',
                        'mid': '1',
                        'title': '表单控件',
                        'children': [
                            {
                                'parentid': 92,
                                'id': '95',
                                'icon': '#',
                                'title': '多选/单选',
                                'url': '/form/checkbox',
                                'level': '3',
                                'permissionid': '0',
                                'mid': '1'
                            },
                            {
                                'parentid': 92,
                                'id': '96',
                                'icon': '#',
                                'title': '下拉选择',
                                'url': '/form/select',
                                'level': '4',
                                'permissionid': '0',
                                'mid': '1'
                            },
                            {
                                'parentid': 92,
                                'id': '97',
                                'icon': '#',
                                'title': '日期选择',
                                'url': '/form/datepicker',
                                'level': '5',
                                'permissionid': '0',
                                'mid': '1'
                            },
                            {
                                'parentid': 92,
                                'id': '98',
                                'icon': '#',
                                'title': '轮播图',
                                'url': '/form/loopcard',
                                'level': '6',
                                'permissionid': '0',
                                'mid': '1'
                            }
                        ]
                    },
                    {
                        'icon': 'fa fa-folder-open-o fa-fw',
                        'mid': '1',
                        'title': '文件上传',
                        'children': [
                            {
                                'parentid': 99,
                                'id': '100',
                                'icon': '#',
                                'title': '图片上传',
                                'url': '/upload/simple',
                                'level': '1',
                                'permissionid': '0',
                                'mid': '1'
                            },
                            {
                                'parentid': 99,
                                'id': '101',
                                'icon': '#',
                                'title': '其他上传',
                                'url': '/upload/video',
                                'level': '2',
                                'permissionid': '0',
                                'mid': '1'
                            }
                        ]
                    },
                    {
                        'icon': 'fa fa-pencil-square-o fa-fw',
                        'mid': '1',
                        'title': '显示面板',
                        'children': [
                            {
                                'parentid': 102,
                                'id': '104',
                                'icon': '#',
                                'title': 'Tab切换',
                                'url': '/pad/tab',
                                'level': '1',
                                'permissionid': '0',
                                'mid': '1'
                            },
                            {
                                'parentid': 102,
                                'id': '105',
                                'icon': '#',
                                'title': 'Collapse折叠',
                                'url': '/pad/collapse',
                                'level': '2',
                                'permissionid': '0',
                                'mid': '1'
                            }
                        ]
                    },
                    {
                        'icon': 'fa fa-comments-o fa-fw',
                        'mid': '1',
                        'title': '消息提示',
                        'children': [
                            {
                                'parentid': 103,
                                'id': '106',
                                'icon': '#',
                                'title': '简单示例',
                                'url': '/message/simple',
                                'level': '1',
                                'permissionid': '0',
                                'mid': '1'
                            }
                        ]
                    },
                    {
                        'icon': 'fa fa-archive fa-fw',
                        'mid': '1',
                        'title': '第三方库',
                        'children': [
                            {
                                'parentid': 116,
                                'id': '117',
                                'icon': '#',
                                'title': '基础图表',
                                'url': '/demo/chart',
                                'level': '1',
                                'permissionid': '0',
                                'mid': '1'
                            },
                            {
                                'parentid': 116,
                                'icon': '#',
                                'title': '百度图表',
                                'url': '/demo/echart',
                                'level': '1',
                                'mid': '1'
                            },
                            {
                                'parentid': 116,
                                'id': '120',
                                'icon': '#',
                                'title': '高德地图',
                                'url': '/demo/map',
                                'level': '3',
                                'permissionid': '0',
                                'mid': '1'
                            },
                            {
                                'parentid': 116,
                                'id': '127',
                                'icon': '#',
                                'title': '代码语法高亮',
                                'url': '/demo/code',
                                'level': '4',
                                'permissionid': '0',
                                'mid': '1'
                            }
                        ]
                    }
                ]
            },
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
