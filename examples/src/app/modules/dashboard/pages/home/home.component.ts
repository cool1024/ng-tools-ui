import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    mediaList: any[];

    constructor(private http: HttpClient) {
        this.mediaList = [];
    }

    ngOnInit() {
        this.http.get('https://randomuser.me/api?results=4').subscribe(res => {
            const response = <any>res;
            response.results.forEach(user => {
                this.mediaList.push({ avatar: user.picture.thumbnail, nick: user.name.first, email: user.email });
            });
            console.log(this.mediaList);
        });
    }

}
