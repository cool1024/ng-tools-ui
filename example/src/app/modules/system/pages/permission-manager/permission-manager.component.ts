import { Component, OnInit } from '@angular/core';
import { PermissionGroup, Permission } from '../../interfaces/permission.interface';
import { ModalService, ConfirmService } from 'ng-tools-ui';
import { PermissionModalComponent } from './permission-modal.component';

@Component({
    templateUrl: './permission-manager.component.html',
    styleUrls: ['./permission-manager.component.scss']
})
export class PermissionManagerComponent implements OnInit {

    permissionGroups = new Array<PermissionGroup>();

    permissions = new Array<Permission>();

    constructor(
        private modal: ModalService,
        private confirm: ConfirmService,
    ) { }

    ngOnInit() {
        this.permissionGroups.push({ id: 1, permissionGroupName: '上班，不存在的' });
        this.permissions.push({ id: 2, permissionGroupId: 1, permissionName: '新权限1' });
        this.permissions.push({ id: 2, permissionGroupId: 1, permissionName: '新权限2' });
    }

    /**
     * 重新载入数据
     */
    loadDatas() {

    }

    /**
     * 编辑新权限组
     */
    editPermissionGroup(permissionGroup?: PermissionGroup) {
        const modal = this.modal.create(PermissionModalComponent, { center: true });
        modal.instance.permissionGroup = permissionGroup || { id: 0, permissionGroupName: '新权分组' };
        modal.open().subscribe(() => {
            this.loadDatas();
        });
    }

    /**
     * 删除权限组
     */
    deletePermissionGroup(permissionGroup: PermissionGroup) {
        this.confirm.danger('确认删除', `您确认要删除'${permissionGroup.permissionGroupName}',操作不可恢复！？`)
            .subscribe(() => {

            });
    }

    /**
     * 编辑新权限
     */
    editPermission() {

    }

    /**
     * 删除权限
     */
    deletePermission() {

    }
}
