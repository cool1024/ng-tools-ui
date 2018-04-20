import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../cores/services';
import { UploadConfig } from 'ng-tools-ui';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/map';

@Component({
    templateUrl: './simple.component.html',
})
export class SimpleComponent implements OnInit {

    // config: UploadConfig = {
    //     host: 'http://127.0.0.1/',
    //     uploader: file => {
    //         const formData = new FormData();
    //         formData.append('file', file);
    //         return this.http.post('http://127.0.0.1/webblog/tools-ui/upload', formData)
    //             // watting 1 seconds
    //             .delay(1000)
    //             .map<any, string>(res => {
    //                 return res.datas;
    //             });
    //     }
    // };

    config: UploadConfig = {
        host: '',
        uploader: file => Observable.of('https://picsum.photos/300/300/?random').delay(2000)

    };

    imageUrl = 'https://picsum.photos/300/300?random';

    imagesUrl = 'https://picsum.photos/300/300,https://picsum.photos/300/300?random';

    constructor(
        public global: GlobalService,
    ) { }

    ngOnInit() { }
}
