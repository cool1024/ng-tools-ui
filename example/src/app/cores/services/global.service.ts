import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

    private values: { [key: string]: any } = {};

    getValue(key: string, defaultValue: any = ''): any {
        return this.values.hasOwnProperty(key) ? this.values[key] : defaultValue;
    }

    setValue(key: string, value: any) {
        this.values[key] = value;
    }

    setValues(params: { [key: string]: any }) {
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                this.values[key] = params[key];
            }
        }
    }

    getValueFromStorage(key: string, defaultValue = ''): string {
        return localStorage.getItem(key) || defaultValue;
    }

    getValuesFromStorage(...keys: string[]): { [key: string]: string } {
        const params: any = {};
        keys.forEach(key => {
            params[key] = this.getValueFromStorage(key);
        });
        return params;
    }

    checkValuesFromStorage(...keys: string[]): boolean {
        return keys.findIndex(key => {
            const value = this.getValueFromStorage(key);
            return value === '';
        }) < 0;
    }

    setValueToStorage(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    setValuesToStorage(keyValues: { [key: string]: string }) {
        for (const key in keyValues) {
            if (keyValues.hasOwnProperty(key)) {
                this.setValueToStorage(key, keyValues[key]);
            }
        }
    }

    loadStrFromStorage(key: string, defaultValue: string) {
        this.setValue(key, this.getValueFromStorage(key, defaultValue));
    }

    loadIntFromStorage(key: string, defaultValue: number) {
        const temp = this.getValueFromStorage(key, defaultValue.toString());
        this.setValue(key, parseInt(temp, 10));
    }

    cleanAllStorage() {
        localStorage.clear();
    }
}
