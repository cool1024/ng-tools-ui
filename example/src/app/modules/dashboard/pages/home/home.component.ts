import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RequestService } from './../../../../cores/services/request.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

    mediaList: any[];

    constructor(private request: RequestService) {
        this.mediaList = [];
    }

    ngOnInit() {
        this.request.withoutHost().text('https://randomuser.me/api?results=4').subscribe(res => {
            const response = JSON.parse(res);
            response.results.forEach(user => {
                this.mediaList.push({ avatar: user.picture.thumbnail, nick: user.name.first, email: user.email });
            });
        });
    }

    ngAfterViewInit() {

    }

}
