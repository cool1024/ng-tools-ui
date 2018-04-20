import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpConfig } from './../../configs/http.config';
import { ApiData } from './../classes/api-data.class';
import 'rxjs/add/operator/skipWhile';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class RequestService {

    private serverUlr: string;
    private appendHeaders: { [key: string]: string };

    constructor(
        private http: HttpClient,
    ) {
        this.serverUlr = HttpConfig.SERVER_URL;
        this.appendHeaders = {};
    }

    // 发送一个get请求（获取文本文件内容）
    text(url: string): Observable<string> {
        return this.http.request('get', this.serverUlr + url, { responseType: 'text' });
    }

    // 发送一个get请求不带参数)
    url(url: string, check = true): Observable<ApiData> {
        const observable = this.http.get<ApiData>(this.serverUlr + url, { headers: this.getHeaders() });
        return check ? observable.skipWhile(res => res.result === false) : observable;
    }

    // 发送一个get请求(可带参数)
    get(url: string, params: { [key: string]: any } | boolean, check = true): Observable<ApiData> {
        if (typeof params === 'boolean') {
            check = <boolean>params;
            params = {};
        }
        const observable = this.http.get<ApiData>(this.serverUlr + url, { headers: this.getHeaders(), params: this.getParams(params) });
        return check ? observable.skipWhile(res => res.result === false) : observable;
    }

    // 发送一个post请求(可带参数)
    post(url: string, params?: { [key: string]: any } | boolean, check = true): Observable<ApiData> {
        if (typeof params === 'boolean') {
            check = <boolean>params;
            params = {};
        }
        const observable = this.http.post<ApiData>(this.serverUlr + url, params, { headers: this.getHeaders() });
        return check ? observable.skipWhile(res => res.result === false) : observable;
    }

    // 发送一个put请求(可带参数)
    put(url: string, params?: { [key: string]: any } | boolean, check = true, final?: () => void): Observable<ApiData> {
        if (typeof params === 'boolean') {
            check = <boolean>params;
            params = {};
        }
        const observable = this.http.put<ApiData>(this.serverUlr + url, params, { headers: this.getHeaders() });
        return check ? observable.skipWhile(res => res.result === false) : observable;
    }

    // 发送一个delete请求(可带参数)
    delete(url: string, params?: { [key: string]: any } | boolean, check = true): Observable<ApiData> {
        if (typeof params === 'boolean') {
            check = <boolean>params;
            params = {};
        }
        const observable = this.http.delete<ApiData>(this.serverUlr + url, { headers: this.getHeaders(), params: this.getParams(params) });
        return check ? observable.skipWhile(res => res.result === false) : observable;
    }

    // 发送一个post请求，可附带文件（用于文件上传）
    files(url: string, params: { [key: string]: any },
        files: Array<{ name: string, files: Array<File> }>, check = true): Observable<ApiData> {
        const observable = this.http.post<ApiData>(
            this.serverUlr + url, this.getFormdata(params, files), { headers: this.getHeaders() });
        return check ? observable.skipWhile(res => res.result === false) : observable;
    }

    // 发送一个post请求，可附带文件（用于文件上传，提供上传进度）
    upload(url: string, files: Array<{ name: string, files: Array<File> }>,
        onprogress: (value: number) => void, final: (value: ApiData) => void) {
        const req = new HttpRequest('POST', this.serverUlr + url, this.getFormdata({}, files), {
            headers: this.getHeaders(),
            reportProgress: true,
        });
        this.http.request(req).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                const percentDone = Math.round(100 * event.loaded / event.total);
                onprogress(percentDone);
            } else if (event instanceof HttpResponse) {
                final(<ApiData>event.body);
            }
        });
    }

    ossUpload(url: string, file: File) {
        const subject = new Subject<string>();
        this.url(url).subscribe(res => {
            const request = new XMLHttpRequest();
            request.open('post', res.datas.host);
            const formData = this.getFormdata({
                name: file.name,
                key: `${res.datas.dir}.${this.getFileType(file.name)}`,
                policy: res.datas.policy,
                OSSAccessKeyId: res.datas.accessid,
                success_action_status: '200',
                signature: res.datas.signature,
                file: file,
            });

            request.onload = (response: any) => {
                if (response.target.status === 200) {
                    subject.next(`${res.datas.host}/${formData.get('key')}`);
                } else {
                    console.error('osssUpload=>', response);
                    subject.next('upload response');
                }
                subject.complete();
            };

            request.onerror = (error: ErrorEvent) => {
                console.error('osssUpload=>', error);
                subject.next('upload error');
                subject.complete();
            };
            request.send(formData);
        });
        return subject.asObservable();
    }

    withHeader(headers: { [key: string]: string }): RequestService {
        const request = new RequestService(this.http);
        request.appendHeaders = headers;
        return request;
    }

    wihtoutHost() {
        const request = new RequestService(this.http);
        request.serverUlr = '';
        return request;
    }

    private getFileType(filePath: string) {
        const startIndex = filePath.lastIndexOf('.');
        return startIndex !== -1 ? filePath.substring(startIndex + 1, filePath.length).toLowerCase() : 'unknow';
    }

    private getParams(params: { [key: string]: number | string }): HttpParams {
        params = JSON.parse(JSON.stringify(params));
        let httpParams = new HttpParams();
        for (const key in params) {
            if (params.hasOwnProperty(key) && params[key] !== null && params[key] !== undefined && params[key] !== '') {
                if (typeof params[key] === 'number') {
                    params[key] = params[key].toString();
                }
                httpParams = httpParams.append(key, <string>params[key]);
            }
        }
        return httpParams;
    }

    private getHeaders(): HttpHeaders {
        let header = new HttpHeaders();
        for (const key in this.appendHeaders) {
            if (this.appendHeaders.hasOwnProperty(key)) {
                header = header.append(key, this.appendHeaders[key]);
            }
        }
        return header;
    }

    private getFormdata(params: { [key: string]: number | string | File }, filesArray = new Array<{ name: string, files: Array<File> }>()) {
        const formdata = new FormData();
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                if (typeof params[key] === 'number') {
                    params[key] = params[key].toString();
                }
                formdata.append(key, <string>params[key]);
            }
        }
        for (const key in filesArray) {
            if (filesArray.hasOwnProperty(key)) {
                const files = filesArray[key];
                for (let i = 0; i < files.files.length; i++) {
                    formdata.append(files.name, files.files[i]);
                }
            }
        }
        return formdata;
    }
}
