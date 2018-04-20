export interface MenuItem {
    title: string;
    icon?: string;
    url?: string;
    targetGroup: MenuGroup;
    active: boolean;
}

export interface MenuGroup {
    groupTitle: string;
    icon?: string;
    menuItems: MenuItem[];
    targetModel: MenuModel;
    active: boolean;
}

export interface MenuModel {
    modelTitle: string;
    icon?: string;
    menuGroups: MenuGroup[];
    active: boolean;
}
