import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from './request.service';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';
import { ApiData } from '../classes';
import { map } from 'rxjs/operators';
import { HttpConfig } from '../../configs/http.config';

@Injectable()
export class AuthService {

    user: any = {};

    constructor(
        private request: RequestService,
        private router: Router,
        private global: GlobalService,
    ) { }

    get loginState(): boolean {
        return <boolean>this.global.getValue('loginState', false);
    }

    set loginState(value: boolean) {
        this.global.setValue('loginState', value);
    }

    setOut() {
        this.loginState = false;
        this.request.post('/managerapi/signout', this.global.getValuesFromStorage(...HttpConfig.AUTH_HEADER_PARAMS))
            .subscribe();
        // this.global.cleanAllStorage();
        this.router.navigateByUrl('/dashboard/login');
    }

    setIn() {
        this.loginState = true;
    }

    checkLogin(): Observable<boolean> | boolean {
        return this.loginState || this.checkToken();
    }

    checkToken(): Observable<boolean> | boolean {
        if (!this.global.checkValuesFromStorage(...HttpConfig.AUTH_HEADER_PARAMS)) {
            this.router.navigateByUrl('/dashboard/login');
            return false;
        }
        const params = this.global.getValuesFromStorage(...HttpConfig.AUTH_HEADER_PARAMS);
        return this.request
            .withoutHeader()
            .post('/managerapi/check', params, false)
            .pipe(map<ApiData, boolean>(res => {
                res.result ? (this.setIn(), this.user = res.datas) : this.setOut();
                return res.result;
            }));
    }
}
