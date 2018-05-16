export interface PermissionGroup {
    id: number;
    permissionGroupName: string;
}

export interface Permission {
    id: number;
    permissionName: string;
    permissionGroupId: number;
}
