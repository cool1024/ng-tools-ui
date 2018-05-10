import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../../../configs/app.config';
import { Account } from '../../interfaces/account.interface';
import { Router } from '@angular/router';
import { GlobalService, RequestService } from '../../../../cores/services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    config = AppConfig.LOGIN_PAGE;

    account: Account = {
        account: '',
        password: '',
        platform: 'admin',
    };

    constructor(
        private router: Router,
        public global: GlobalService,
        private request: RequestService,
    ) { }

    confirmLogin(btn: any) {
        this.request.withoutHeader().post('/signin', this.account).subscribe({
            next: res => {
                const datas = res.datas;
                this.global.setValuesToStorage({
                    'ng-params-one': datas.secret,
                    'ng-params-two': datas.token,
                    'ng-params-three': datas.platform,
                });
                this.router.navigateByUrl('/');
            },
            complete: () => btn.dismiss()
        });
    }
}
