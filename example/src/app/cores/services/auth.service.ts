import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from './request.service';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';
import { ApiData } from '../classes';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {



    constructor(
        private request: RequestService,
        private router: Router,
        private global: GlobalService) { }

    get loginState(): boolean {
        return <boolean>this.global.getValue('loginState', false);
    }

    set loginState(value: boolean) {
        this.global.setValue('loginState', value);
    }

    setOut() {
        this.loginState = false;
        this.router.navigateByUrl('/login');
    }

    setIn() {
        this.loginState = true;
    }

    checkLogin(): Observable<boolean> | boolean {
        return this.loginState || this.checkToken();
    }

    checkToken(): Observable<boolean> | boolean {
        if (!this.global.checkValuesFromStorage('ng-params-one', 'ng-params-two', 'ng-params-three')) {
            return false;
        }
        const params = this.global.getValuesFromStorage('ng-params-one', 'ng-params-two', 'ng-params-three');
        return this.request
            .withoutHeader()
            .post('', params)
            .pipe(map<ApiData, boolean>(res => {
                res.result ? this.setIn() : this.setOut();
                return res.result;
            }));
    }
}
