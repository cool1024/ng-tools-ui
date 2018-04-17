import { Component } from '@angular/core';
import { ModalService } from 'ng-tools-ui';

@Component({
    template: `
    <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button (click)="dismiss()" type="button" class="close">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body" [innerHTML]="content"></div>
    <div class="modal-footer">
        <button (click)="dismiss()" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button (click)="close()" type="button" class="btn btn-primary">Save changes</button>
    </div>`,
})
export class PreviewModalComponent {

    content = '...';

    constructor(
        private modal: ModalService
    ) { }

    close() {
        this.modal.close('modal close');
    }

    dismiss() {
        this.modal.dismiss();
    }
}
