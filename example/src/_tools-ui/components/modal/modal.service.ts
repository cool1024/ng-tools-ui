import { Injectable, Injector, ApplicationRef, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
import { ModalComponent } from './modal.component';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ModalService {

    private show: boolean;
    private modalComponent: any;
    private baseComponent: ComponentFactory<ModalComponent>;
    private windowCmptRef: ComponentRef<ModalComponent>;
    private containerEl: HTMLBodyElement;
    private handle: Subject<any>;
    public modal: ComponentRef<any>;

    constructor(
        private applicationRef: ApplicationRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector
    ) { }

    init() {
        this.baseComponent = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
        this.windowCmptRef = this.baseComponent.create(this.injector);
        this.windowCmptRef.instance.closeHandle = () => {
            this.dismiss();
        };
        this.applicationRef.attachView(this.windowCmptRef.hostView);
        this.containerEl = document.querySelector('body');
        this.containerEl.appendChild(this.windowCmptRef.location.nativeElement);
    }

    create(content: any, options?: { size?: string, center?: boolean, overflow?: string }): ModalService {
        this.init();
        this.modalComponent = content;
        this.modal = this.windowCmptRef.instance.loadComponent(content);
        if (options !== undefined) {
            this.windowCmptRef.instance.size = options.size || '';
            this.windowCmptRef.instance.center = options.center || false;
            this.windowCmptRef.instance.overflow = options.overflow || 'auto';
        }
        return this;
    }

    get instance(): any {
        return this.modal.instance;
    }

    close(params?: any) {
        this.windowCmptRef.instance.close();
        this.windowCmptRef.destroy();
        if (this.handle) { this.handle.next(params); }
    }

    dismiss() {
        this.windowCmptRef.instance.close();
        this.windowCmptRef.destroy();
    }

    open(): Observable<any> {
        this.windowCmptRef.instance.open();
        this.handle = new Subject<any>();
        return this.handle.asObservable();
    }
}
