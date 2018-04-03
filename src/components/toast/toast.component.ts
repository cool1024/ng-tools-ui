
import { Component, OnDestroy } from '@angular/core';
import { Toast } from './toast.class';

@Component({
    template: `
    <div *ngIf="show" class="{{position}} position-fixed alert m-2" style="width:20rem;z-index:9999">
        <div *ngFor="let toast of toasts" class="alert {{toast.color}}" [class.ts-op-hidden]="(toast.timeout - toast.cx)<=1000">
            <h6 class="alert-heading">{{toast.title}}
                <span (click)="removeToast(toast)" class="pointer pull-right" style="opacity: 0.8;">&times;</span>
            </h6>
            <hr class="mb-2">
            <p class="mb-0 mt-0">{{toast.message}}</p>
        </div>
    </div>
    `,
    styles: [
        `.close {
            cursor:pointer;
        }
        .ts-top {
            top:0
        }
        .ts-bottom {
            bottom:0
        }
        .ts-left {
            left:0
        }
        .ts-right {
            right:0;
        }
        .ts-op-hidden{
            opacity:0;
            transition: opacity 1s;
        }
        `,
    ]
})
export class ToastComponent implements OnDestroy {

    toasts: Toast[];

    maxLength = 5;

    position: string;

    dValue = 500;

    show = true;

    private timer: any;

    constructor() {
        this.toasts = new Array<Toast>();
        this.position = 'ts-bottom ts-right';
        this.timer = null;
    }

    addToast(toast: Toast) {
        if (this.timer === null) {
            this.timer = setInterval(() => {
                this.checkTimeOut();
            }, this.dValue);
        }
        if (this.toasts.length > this.maxLength) {
            this.toasts.shift();
        }
        this.toasts.push(toast);
        this.show = true;
    }

    removeToast(toast: Toast) {
        this.toasts.splice(this.toasts.indexOf(toast), 1);
    }

    checkTimeOut() {
        this.toasts.forEach(toast => {
            toast.cx += this.dValue;
        });
        this.toasts = this.toasts.filter(toast => toast.timeout > toast.cx);
        if (this.toasts.length <= 0) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    ngOnDestroy() {
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

}
