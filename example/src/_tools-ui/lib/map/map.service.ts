import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MapConfig } from './map.config';
import { GeometryUtil } from './map';
import { ScriptService } from '../../commons/services/script.service';
declare const window: any;
declare const document: any;

@Injectable()
export class MapService {

    private loadHandle: Observable<any>;
    private ready = false;
    private amap: any;

    constructor(
        private mapConfig: MapConfig,
        private script: ScriptService,
    ) {
        const sub = new Subject<any>();
        this.loadHandle = sub.asObservable();
        if (!window.AMap) {
            window.aMapLoadCallBack = () => {
                this.amap = window.AMap;
                this.ready = true;
                sub.next(window.AMap);
                sub.complete();
            };
            this.script.load(`https://webapi.amap.com/maps?v=1.4.3&key=${mapConfig.appKey}&callback=aMapLoadCallBack`);
        } else {
            this.ready = true;
        }
        console.log('load js');
    }

    doFuc(func: (amap: any) => void) {
        if (this.ready) {
            func(this.amap);
        } else {
            this.loadHandle.subscribe({ complete: () => func(this.amap) });
        }
    }

    getPositionByAddress(address: string): Observable<{ result: boolean, datas: any }> {
        const sub = new Subject<{ result: boolean, datas: any }>();
        this.doFuc(() => {
            window.AMap.service('AMap.Geocoder', () => {
                const geocoder = new window.AMap.Geocoder({});
                geocoder.getLocation(address, (status: any, result: any) => {
                    if (status === 'complete' && result.info === 'OK') {
                        sub.next({ result: true, datas: result });
                    } else {
                        sub.next({ result: false, datas: result });
                    }
                    sub.complete();
                });
            });
        });
        return sub.asObservable();
    }

    geometryUtil(callback: (gutil: GeometryUtil, amap: any) => void): void {
        this.doFuc(amap => {
            callback(amap.GeometryUtil, amap);
        });
    }
}
