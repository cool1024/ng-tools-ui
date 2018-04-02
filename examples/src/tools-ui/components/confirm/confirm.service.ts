import { Injectable, Injector, ApplicationRef, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
import { ConfirmComponent } from './confirm.component';
import { ConfirmOptions } from './confirm.interface';
import { ConfirmConfig } from './confirm.data';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfirmService {
    private baseComponent: ComponentFactory<ConfirmComponent>;
    private windowCmptRef: ComponentRef<ConfirmComponent>;

    constructor(
        private applicationRef: ApplicationRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        private options: ConfirmConfig
    ) { }

    private init() {
        if (this.baseComponent !== undefined || this.baseComponent != null) { return; }
        this.baseComponent = this.componentFactoryResolver.resolveComponentFactory(ConfirmComponent);
        this.windowCmptRef = this.baseComponent.create(this.injector);
        this.applicationRef.attachView(this.windowCmptRef.hostView);
        const containerEl = document.querySelector('body');
        containerEl.appendChild(this.windowCmptRef.location.nativeElement);
    }

    create(title: string, message: string, options: { okTitle?: string, cancelTitle?: string, color?: string }): Observable<void> {
        this.init();
        this.windowCmptRef.instance.title = title;
        this.windowCmptRef.instance.message = message;
        this.windowCmptRef.instance.play();
        this.windowCmptRef.instance.color = options.color || 'success';
        if (options) {
            this.windowCmptRef.instance.config = <ConfirmOptions>options;
        }
        return this.windowCmptRef.instance.updateHandle();
    }

    info(title: string, message: string, options?: { okTitle?: string, cancelTitle?: string }) {
        const config = this.combineOptions(options || {});
        config.icon = 'fa fa-fw fa-info-circle text-info';
        config.color = 'info';
        return this.create(title, message, config);
    }

    warning(title: string, message: string, options?: { okTitle?: string, cancelTitle?: string }) {
        const config = this.combineOptions(options || {});
        config.icon = 'fa fa-fw fa-exclamation-triangle text-warning';
        config.color = 'warning';
        return this.create(title, message, config);
    }

    danger(title: string, message: string, options?: { okTitle?: string, cancelTitle?: string }) {
        const config = this.combineOptions(options || {});
        config.icon = 'fa fa-fw fa-exclamation-circle text-danger';
        config.color = 'danger';
        return this.create(title, message, config);
    }

    success(title: string, message: string, options?: { okTitle?: string, cancelTitle?: string }) {
        const config = this.combineOptions(options || {});
        config.icon = 'fa fa-fw fa-check-circle text-success';
        config.color = 'success';
        return this.create(title, message, config);
    }

    combineOptions(options: { okTitle?: string, cancelTitle?: string }): any {
        return {
            okTitle: options.okTitle || this.options.okTitle,
            cancelTitle: options.cancelTitle || this.options.cancelTitle
        };
    }
}
