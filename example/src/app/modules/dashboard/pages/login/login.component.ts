import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../../../configs/app.config';
import { Account } from '../../interfaces/account.interface';

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

    constructor() { }
}
