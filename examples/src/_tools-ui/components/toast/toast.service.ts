import { Injectable, Injector, ApplicationRef, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
import { ToastComponent } from './toast.component';
import { Toast } from './toast.class';

@Injectable()
export class ToastService {

    private baseComponent: ComponentFactory<ToastComponent>;
    private windowCmptRef: ComponentRef<ToastComponent>;
    private defaultPosition = 'bottom-0 right-0';
    private defaultTimeOut = 2000;

    constructor(
        private applicationRef: ApplicationRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector) { }

    private init() {
        if (this.baseComponent !== undefined || this.baseComponent != null) { return; }
        this.baseComponent = this.componentFactoryResolver.resolveComponentFactory(ToastComponent);
        this.windowCmptRef = this.baseComponent.create(this.injector);
        this.applicationRef.attachView(this.windowCmptRef.hostView);
        const containerEl = document.querySelector('body');
        containerEl.appendChild(this.windowCmptRef.location.nativeElement);
    }

    create(title: string, message: string, options: { color: string, timeout?: number }) {
        this.init();
        this.windowCmptRef.instance.addToast(new Toast(title, message, options.color, options.timeout || this.defaultTimeOut));
    }

    info(title: string, message: string, timer?: number) {
        this.create(title, message, { color: 'bg-info text-white', timeout: timer || this.defaultTimeOut });
    }

    success(title: string, message: string, timer?: number) {
        this.create(title, message, { color: 'bg-success text-white', timeout: timer || this.defaultTimeOut });
    }

    danger(title: string, message: string, timer?: number) {
        this.create(title, message, { color: 'bg-danger text-white', timeout: timer || this.defaultTimeOut });
    }

    warning(title: string, message: string, timer?: number) {
        this.create(title, message, { color: 'bg-warning text-dark', timeout: timer || this.defaultTimeOut });
    }

}
