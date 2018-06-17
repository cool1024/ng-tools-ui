import { Component, ViewChild, ComponentFactoryResolver, Injector } from '@angular/core';
import { WindowDirective } from './window.directive';
import { WindowViewService } from './window-view.service';

@Component({
    selector: 'ts-window',
    template: `
    <div [class.d-none]="!show" class="animated zoomIn position-fixed h-100 w-100" [ngStyle]="windowStyle">
        <ng-template tsWindowHost></ng-template>
    </div>
    `,
    styles: [`
    .animated {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    .animated.infinite {
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
    }
    @-webkit-keyframes zoomIn {
        from {
            opacity: 0;
            -webkit-transform: scale3d(0.3, 0.3, 0.3);
            transform: scale3d(0.3, 0.3, 0.3);
        }
        50% {
            opacity: 1;
        }
    }
    @keyframes zoomIn {
        from {
          opacity: 0;
          -webkit-transform: scale3d(0.3, 0.3, 0.3);
          transform: scale3d(0.3, 0.3, 0.3);
        }
        50% {
          opacity: 1;
        }
      }
      .zoomIn {
        -webkit-animation-name: zoomIn;
        animation-name: zoomIn;
      }
    `]
})
export class WindowComponent {

    windowStyle: any;

    show = false;

    @ViewChild(WindowDirective) modalHost: WindowDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
        this.windowStyle = {
            top: 0,
            left: 0,
            zIndex: 1060,
        };
    }

    loadComponent(content: any, index: number, injector: Injector) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(content);
        this.modalHost.viewContainerRef.clear();
        this.windowStyle.zIndex += index;
        return this.modalHost.viewContainerRef.createComponent(componentFactory, undefined, injector);
    }

    present() { this.show = true; }
    close() { this.show = false; }
}
