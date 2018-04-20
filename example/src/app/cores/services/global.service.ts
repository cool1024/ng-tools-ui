import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

    private events = new Array<{ event: string, handle: (values: { [key: string]: any }) => void }>();

    values: { [key: string]: any } = {};

    getValue(key: string, defaultValue: any = '') {
        return this.values[key] || defaultValue;
    }

    setValue(key: string, value: any) {
        this.values[key] = value;
    }

    addEvent(event: string, handle: (values: { [key: string]: any }) => void) {
        this.events.push({ event, handle });
    }

    private applyEvent(key: string) {
        this.events.forEach(event => {
            if (event.event === key) {
                event.handle(this.values);
            }
        });
    }
}
