import { Component } from '@angular/core';
import { ModalService, ToastService } from 'ng-tools-ui';
import { Role } from '../../interfaces/role.interface';
import { RoleService } from '../../services/role.service';
import { GlobalService } from '../../../../cores/services';

@Component({
    template: `<div class="modal-header">
    <h5 class="modal-title">角色面板</h5>
        <button (click)="modal.dismiss()" type="button" class="close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
<div class="modal-body">
    <div class="form-group">
        <label class="col-form-label">上级角色:</label>
        <input [value]="parentRole.roleName" readonly type="text" class="form-control">
    </div>
    <div class="form-group">
        <label class="col-form-label">角色名称:</label>
        <input [(ngModel)]="role.roleName" type="text" class="form-control">
    </div>
    <div class="form-group">
        <label class="col-form-label">权限列表:</label>
        <div>
            <div class="border border-muted p-2 permission-pad">
                <p>系统设置</p>
                <div>
                    <ts-switch [color]="global.getValue('color')"></ts-switch>
                    <span>全部权限</span>
                    <ts-switch [color]="global.getValue('color')"></ts-switch>
                    <span>新增权限</span>
                </div>
            <div>
        </div>
    </div>
</div>
<div class="modal-footer">
    <button (click)="modal.dismiss()" type="button" class="btn btn-white">取消</button>
    <button tsBtn loading color="primary" (submit)="confirmSave($event)">确认保存</button>
</div>`,
})
export class RoleModalComponent {

    role: Role;

    parentRole: any;

    constructor(
        public modal: ModalService,
        private toast: ToastService,
        private roleService: RoleService,
        public global: GlobalService,
    ) { }

    /**
     * 确认保存
     *
     * @param {any} btn
     */
    confirmSave(btn: any) {
        if (this.role.id === 0) {
            this.roleService.inserRole(this.role)
                .subscribe({
                    next: res => {
                        this.toast.success('添加成功', `成功添加角色${this.role.roleName}`);
                        this.modal.close(res.datas);
                    },
                    complete: () => btn.dismiss()
                });
        } else {
            this.roleService.updateRole(this.role)
                .subscribe({
                    next: () => {
                        this.toast.success('修改成功', `成功修改角色${this.role.roleName}`);
                        this.modal.close(this.role);
                    },
                    complete: () => btn.dismiss()
                });
        }
    }
}
