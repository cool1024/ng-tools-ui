import { Component } from '@angular/core';
import { ConfirmService, ModalService, ToastService, WindowService } from 'ng-tools-ui';
import { ModalComponent } from './modal.component';
import { WindowComponent } from './window.component';

@Component({
    templateUrl: './confirm.component.html',
})
export class ConfirmComponent {

    constructor(
        private confirm: ConfirmService,
        private toast: ToastService,
        private modal: ModalService,
        private window: WindowService,
    ) { }

    showAlert(type: string) {
        switch (type) {
            case 'info': {
                this.confirm.info('提示', '确定要删除这个吗，操作不可恢复')
                    .subscribe(() => console.log('info'));
                break;
            }
            case 'warning': {
                this.confirm.warning('警告', '确定要删除这个吗，操作不可恢复')
                    .subscribe(() => console.log('warning'));
                break;
            }
            case 'danger': {
                this.confirm.danger('危险', '确定要删除这个吗，操作不可恢复')
                    .subscribe(() => console.log('danger'));
                break;
            }
            case 'success': {
                this.confirm.success('成功', '确定要删除这个吗，操作不可恢复')
                    .subscribe(() => console.log('success'));
                break;
            }
        }
    }

    showMessage(type: string) {
        switch (type) {
            case 'info': {
                this.toast.info(`提示`, '这是一条提示信息...');
                break;
            }
            case 'warning': {
                this.toast.warning('警告', '这是一条警告信息...');
                break;
            }
            case 'danger': {
                this.toast.danger('危险', '这是一条危险信息...');
                break;
            }
            case 'success': {
                this.toast.success('成功', '这是一条危险信息...');
                break;
            }
        }
    }

    emptyModal() {
        const handle = this.modal.create(ModalComponent).open();
        handle.subscribe(res => {
            console.log(res);
        });
    }

    paramsModal() {
        const modal = this.modal.create(ModalComponent);
        modal.instance.content = `Message Content`;
        modal.open().subscribe(res => {
            console.log(res);
        });
    }

    sizeModal() {
        this.modal.create(ModalComponent, { size: 'lg' }).open();
    }

    centerModal() {
        this.modal.create(ModalComponent, { size: 'sm', center: true }).open();
    }

    showWindow() {
        const window = this.window.push(WindowComponent);
        window.present();
    }
}
