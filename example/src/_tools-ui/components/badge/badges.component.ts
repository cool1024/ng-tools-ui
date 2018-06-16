import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomAttr } from './../../commons/extends/attr.class';
import { Badge } from './badge.interface';

@Component({
    selector: `ts-badges`,
    template: ``,
    exportAs: 'tsBadges'
})
export class BadgeComponents extends DomAttr {

    @Input() badges: Badge[];

    @Output() closeHandle = new EventEmitter<Badge>();
}
