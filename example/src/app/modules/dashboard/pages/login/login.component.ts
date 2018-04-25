import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../../../configs/app.config';
import { Account } from '../../interfaces/account.interface';
import { Router } from '@angular/router';
import { GlobalService } from '../../../../cores/services';

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
    };

    constructor(
        private router: Router,
        public global: GlobalService,
    ) { }

    confirmLogin() {
        this.router.navigateByUrl('/');
    }
}
