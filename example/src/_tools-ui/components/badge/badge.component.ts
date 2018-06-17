import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomAttr } from './../../commons/extends/attr.class';

@Component({
    selector: `ts-badge`,
    template: `
        <span class="mr-2 mb-2 badge badge-pill p-2 ts-badge text-white" [ngClass]="badgeClass">
            {{label||''}}
            <span (click)="closeHandle.emit()" class="fa fa-trash-o fa-lg align-top pointer" aria-hidden="true"></span>
        </span>`,
    styles: [`
        .badge{
            opacity: 0.8;
        }
        .ts-badge span{
            transition: all 0.2s;
            width: 0px;
            overflow: hidden;
            opacity: 0;
        }
        .ts-badge:hover span{
            transition: all 0.2s;
            opacity: 1;
            width: 15px;
            overflow: unset;
            margin-left: 3px;
        }
    `],
    exportAs: 'tsBadge'
})
export class BadgeComponent extends DomAttr {

    @Input() label: string;

    @Output() closeHandle = new EventEmitter<void>();
}
