/**
 * 表单服务，提供了一些表单提交的辅助方法
 * @file form.service.ts
 * @author xiaojian
 * @date 2018年06月12日
 */
import { Injectable } from '@angular/core';

@Injectable()
export class FormService {

    constructor() { }

    /**
     * 深度拷贝:不能出现循环引用
     * @param {{ [key: string]: any }} obj 需要拷贝的对象
     * @return {{ [key: string]: any }
     */
    copy(obj: { [key: string]: any }): { [key: string]: any } {
        return JSON.parse(JSON.stringify(obj));
    }

    /**
     * 浅拷贝一个JSON数据
     * @param {{ [key: string]: any }} obj 需要拷贝的对象
     * @return {{ [key: string]: any }
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
