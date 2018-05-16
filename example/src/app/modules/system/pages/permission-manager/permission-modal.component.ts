import { Component } from '@angular/core';
import { PermissionGroup } from '../../interfaces/permission.interface';
import { ModalService } from 'ng-tools-ui';

@Component({
    template: `
    <div class="modal-header">
        <h5 class="modal-title">权限编辑面板</h5>
            <button (click)="modal.dismiss()" type="button" class="close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <div class="form-group">
            <label class="col-form-label">权限组名:</label>
            <input [(ngModel)]="permissionGroup.permissionGroupName" type="text" class="form-control">
        </div>
    </div>
    <div class="modal-footer">
        <button (click)="modal.dismiss()" type="button" class="btn btn-white">取消</button>
        <button tsBtn loading color="primary" (submit)="confirmSave($event)" [disabled]="!!permissionGroup">确认保存</button>
    </div>`,
})
export class PermissionModalComponent {

    permissionGroup: PermissionGroup;

    constructor(
        public modal: ModalService
    ) { }

    /**
     * 确认保存
     *
     * @param {any} btn
     */
    confirmSave(btn: any) {
        btn.dismiss();
        this.modal.close();
    }
}
