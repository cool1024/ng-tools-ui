import { Input, HostBinding } from '@angular/core';

export enum Size {
    sm = 'sm',
    default = '',
    lg = 'lg',
}

export enum Color {
    default = 'white',
    white = 'white',
    danger = 'danger',
    warning = 'warning',
    dark = 'dark',
    light = 'light',
    secondary = 'secondary',
    primary = 'primary'
}

export const LightColors = [
    'white',
    'muted',
    'warning',
    'light'
];

export class DomAttr {

    @Input() lg: string = null;

    @Input() sm: string = null;

    @Input() md: string = null;

    @Input() xl: string = null;

    @Input() color: Color = Color.default;

    @Input() outline: string = null;

    @Input() active: string = null;

    get btnClass(): string {
        const active = this.active === null ? '' : 'active';
        const outline = this.outline === null ? '' : 'outline-';
        const size = this.lg !== null ? 'btn-lg' : (this.sm !== null ? 'btn-sm' : '');
        return `btn ${size} btn-${outline}${this.color} ${active}`;
    }

    get bgClass(): string {
        return `bg-${this.color}`;
    }

    get textClass(): string {
        return `text-${this.color}`;
    }

    get lightOrDark(): string {
        return LightColors.indexOf(this.color) >= 0 ? 'light' : 'dark';
    }

    get inLightOrDark(): string {
        return LightColors.indexOf(this.color) < 0 ? 'light' : 'dark';
    }

    get browserSize(): string {
        if (this.xl !== null) {
            return 'xl';
        }
        if (this.lg !== null) {
            return 'lg';
        }
        if (this.md !== null) {
            return 'md';
        }
        if (this.sm !== null) {
            return 'sm';
        }
        return 'md';
    }

    get borderClass(): string {
        return `border-${this.color}`;
    }

    get tabClass(): string {
        return `tab-border-${this.color}`;
    }
}
