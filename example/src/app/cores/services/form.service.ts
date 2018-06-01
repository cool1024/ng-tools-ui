import { Injectable } from '@angular/core';

@Injectable()
export class FormService {

    constructor() { }

    /**
     * 深度拷贝:不能出现循环引用
     */
    copy(obj: { [key: string]: any }): { [key: string]: any } {
        return JSON.parse(JSON.stringify(obj));
    }

    /**
     * 浅拷贝一个JSON数据
     */
    jsonCopy(json: { [key: string]: any }): { [key: string]: any } {
        const copy: { [key: string]: any } = {};
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                copy[key] = json[key];
            }
        }
        return copy;
    }
}
