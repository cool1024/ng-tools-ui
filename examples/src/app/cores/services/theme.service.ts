import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {

    private color: string;

    constructor() {
        this.color = 'primary';
    }

    get themeColor(): string {
        return this.getColor();
    }

    public setColor(color: string) {
        this.color = color;
    }

    public getColor(): string {
        return this.color;
    }

}
