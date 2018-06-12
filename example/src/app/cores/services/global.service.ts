/**
 * 全局服务，提供了系统内部全局变量，存储方法
 * @file global.service.ts
 * @author xiaojian
 * @date 2018年06月12日
 */
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

    private values: { [key: string]: any } = {};

    /**
     * 获取一个系统全局变量
     * @param {string} key 变量名称
     * @param {any} defaultValue 默认值
     * @return {any}
     */
    getValue(key: string, defaultValue: any = ''): any {
        return this.values.hasOwnProperty(key) ? this.values[key] : defaultValue;
    }

    /**
     * 设置一个系统全局变量
     * @param {string} key 变量名称
     * @param {any} value 值
     * @return {void}
     */
    setValue(key: string, value: any) {
        this.values[key] = value;
    }

    /**
     * 批量设置系统全局变量
     * @param {{ [key: string]: any }} params 批量参数
     * @return {void}
     */
    setValues(params: { [key: string]: any }) {
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                this.values[key] = params[key];
            }
        }
    }

    /**
     * 从本地存储中获取一个变量
     * @param {string} key 变量名称
     * @param {string} defaultValue 默认值
     * @return {string}
     */
    getValueFromStorage(key: string, defaultValue = ''): string {
        return localStorage.getItem(key) || defaultValue;
    }

    /**
     * 从本地存储中批量获取变量
     * @param {string[]} ...keys 变量名称
     * @return {{ [key: string]: string }}
     */
    getValuesFromStorage(...keys: string[]): { [key: string]: string } {
        const params: any = {};
        keys.forEach(key => {
            params[key] = this.getValueFromStorage(key);
        });
        return params;
    }

    /**
     * 批量校验本地存储中的变量，一个不存在就会校验失败
     * @param {string[]} ...keys 变量名称
     * @return {boolean} 
     */
    checkValuesFromStorage(...keys: string[]): boolean {
        return keys.findIndex(key => {
            const value = this.getValueFromStorage(key);
            return value === '';
        }) < 0;
    }

    /**
     * 设置本地存储
     * @param {string} key 键名
     * @param {string} value 值
     * @return {void}
     */
    setValueToStorage(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    /**
     * 批量设置本地存储
     * @param {{ [key: string]: any }} keyValues 批量参数
     * @return {void}
     */
    setValuesToStorage(keyValues: { [key: string]: string }) {
        for (const key in keyValues) {
            if (keyValues.hasOwnProperty(key)) {
                this.setValueToStorage(key, keyValues[key]);
            }
        }
    }

    /**
     * 从本地存储中加载一个字符串（只能是string）
     * @param {string} key 键名
     * @param {string} defaultValue 默认值
     */
    loadStrFromStorage(key: string, defaultValue: string) {
        this.setValue(key, this.getValueFromStorage(key, defaultValue));
    }

    /**
     * 从本地存储中加载一个数字（只能是Int）
     * @param {string} key 键名
     * @param {number} defaultValue 默认值
     */
    loadIntFromStorage(key: string, defaultValue: number) {
        const temp = this.getValueFromStorage(key, defaultValue.toString());
        this.setValue(key, parseInt(temp, 10));
    }

    /**
     * 清空本地存储
     */
    cleanAllStorage() {
        localStorage.clear();
    }
}
