import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../cores/services';
import { UploadConfig } from 'ng-tools-ui';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: './video.component.html',
})
export class VideoComponent implements OnInit {

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
        progresser: file => {
            return Observable.interval(100)
                .take(101)
                .map<number, number | string>(res => res < 100 ? res : 'https://cool1024.com/upload/47e0b428f30fde9a0395b18e6db62ddd.mp4');
        }
    };

    videoUrl = 'https://cool1024.com/upload/47e0b428f30fde9a0395b18e6db62ddd.mp4';

    audioUrl = 'https://cool1024.com/upload/c2d8f23c236f257039305cc263ec6439.mp3';

    file: File;

    files: File[];

    constructor(
        public global: GlobalService,
        public http: HttpClient,
    ) { }

    ngOnInit() { }
}
