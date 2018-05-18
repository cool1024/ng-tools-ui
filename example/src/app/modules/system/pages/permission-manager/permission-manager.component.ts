import { Component, OnInit } from '@angular/core';
import { FormService } from './../../../../cores/services';
import { PermissionGroupItem, PermissionGroup } from '../../interfaces/permission.interface';
import { ModalService, ConfirmService } from 'ng-tools-ui';
import { PermissionModalComponent } from './permission-modal.component';
import { PermissionService } from '../../services/permission.service';

@Component({
    templateUrl: './permission-manager.component.html',
    styleUrls: ['./permission-manager.component.scss']
})
export class PermissionManagerComponent implements OnInit {

    permissionGroupItems = new Array<PermissionGroupItem>();

    constructor(
        private modal: ModalService,
        private confirm: ConfirmService,
        private permissionService: PermissionService,
        public form: FormService,
    ) { }

    ngOnInit() {
        this.loadDatas();
    }

    /**
     * 重新载入数据
     */
    loadDatas() {
        this.permissionService.getAllPermission().subscribe(items => this.permissionGroupItems = items);
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
