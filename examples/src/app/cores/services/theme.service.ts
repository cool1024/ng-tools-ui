import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {

    private color: string;

    constructor() {
        this.color = 'dark';
    }

    public setColor(color: string) {
        this.color = color;
    }

    public getColor(): string {
        return this.color;
    }
}
