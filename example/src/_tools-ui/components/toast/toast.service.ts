import { Injectable, Injector, Inject, ApplicationRef, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
import { ToastComponent } from './toast.component';
import { Toast } from './toast.class';
import { ToastConfig } from './toast.interface';

@Injectable()
export class ToastService {

    private baseComponent: ComponentFactory<ToastComponent>;
    private windowCmptRef: ComponentRef<ToastComponent>;

    constructor(
        private applicationRef: ApplicationRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        @Inject('DEFAULT_CONFIG') private config: ToastConfig,
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
        this.windowCmptRef.instance.addToast(new Toast(title, message, options.color, options.timeout || this.config.timeout));
    }

    info(title: string, message: string, timer?: number) {
        this.create(title, message, { color: 'bg-info text-white', timeout: timer || this.config.timeout });
    }

    success(title: string, message: string, timer?: number) {
        this.create(title, message, { color: 'bg-success text-white', timeout: timer || this.config.timeout });
    }

    danger(title: string, message: string, timer?: number) {
        this.create(title, message, { color: 'bg-danger text-white', timeout: timer || this.config.timeout });
    }

    warning(title: string, message: string, timer?: number) {
        this.create(title, message, { color: 'bg-warning text-dark', timeout: timer || this.config.timeout });
    }

}
