import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ScriptService {

    private src: string;

    private isReady: boolean;

    public useScript: Subject<any>;

    load(src: string, target?: any): Subject<any> {
        this.isReady = false;
        this.src = src;
        const body = document.querySelector('body');
        this.useScript = new Subject<any>();
        if (target) {
            this.isReady = true;
            this.useScript.complete();
        } else {
            const node: HTMLScriptElement = document.createElement('script');
            node.async = true;
            node.type = 'text/javascript';
            node.src = src;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
            node.addEventListener('load', () => {
                this.isReady = true;
                this.useScript.complete();
            });
        }
        return this.useScript;
    }
}
