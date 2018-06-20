import { Component, ViewChild, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { ModalDirective } from './modal.directive';

@Component({
    selector: 'ts-modal',
    template: `
    <div #pad class="modal fade animated zoomIn" (click)="tryClose($event)"  [ngClass]="{'show': show}"
        [ngStyle]="{display: show?'block':'none',overflowY:'auto'}">
        <div class="modal-dialog modal-{{size}}"
            [ngStyle]="{height: scroll==='in'?'90%':'auto'}" [class.modal-dialog-centered]="center">
            <div class="modal-content h-100" [ngStyle]="scroll==='in'?{overflowY:'auto',overflowX:'hidden'}:{}">
                <ng-template tsModalHost></ng-template>
            </div>
        </div>
    </div>
    <div *ngIf="show" class="modal-backdrop fade show"></div>`,
    styles: [`
    .animated {
        animation-duration: 0.5s;
        animation-fill-mode: both;
    }
    .animated.infinite {
        animation-iteration-count: infinite;
    }
    @keyframes zoomIn {
        from {
          opacity: 0;
          transform: scale3d(0.3, 0.3, 0.3);
        }
        50% {
          opacity: 1;
        }
      }
    .zoomIn {
        animation-name: zoomIn;
    }
    `]
})
export class ModalComponent {

    @ViewChild('pad') pad: any;

    @ViewChild(ModalDirective) modalHost: ModalDirective;

    show: boolean;

    size: string;

    center: boolean;

    scroll: string;

    closeHandle: () => void;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
        this.show = false;
        this.center = false;
        this.size = '';
    }

    loadComponent(content: any): ComponentRef<any> {

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(content);

        const viewContainerRef = this.modalHost.viewContainerRef;

        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);

        return componentRef;

    }

    open() {
        this.show = true;
    }

    close() {
        this.show = false;
    }

    tryClose(event: any) {
        if (event.target === this.pad.nativeElement) {
            this.close();
            this.closeHandle();
        }
    }

}
