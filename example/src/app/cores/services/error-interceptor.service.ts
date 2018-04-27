import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse,
    HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import { ToastService } from 'ng-tools-ui';
import { HttpConfig } from '../../configs/http.config';
import { ApiData } from '../classes/api-data.class';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private toast: ToastService,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // 获取请求参数
        let httpParams = request.params;

        // 获取请求超时时间
        let timeOut = HttpConfig.TIME_OUT;
        if (httpParams.has('REQUEST_TIME_OUT')) {
            timeOut = parseInt(httpParams.get('REQUEST_TIME_OUT'), 10);
            httpParams = httpParams.delete('REQUEST_TIME_OUT');
        }

        // 更新请求参数
        request = request.clone({ params: httpParams });

        let handle = next.handle(request);

        // 后置错误拦截
        handle = handle
            // 请求超时
            .timeout(timeOut)
            // 异常处理
            .catch(error => {

                let errorMessage = '';

                let errorTitle = '';

                // 识别服务器响应错误
                if (error instanceof HttpErrorResponse) {

                    switch (error.status) {
                        case 401: {
                            errorMessage = HttpConfig.HTTP_ERRORS.AUTH_ERROR;
                            break;
                        }
                        case 404: {
                            errorMessage = HttpConfig.HTTP_ERRORS.NOTFOUND_ERROR;
                            break;
                        }
                        case 500: {
                            errorMessage = HttpConfig.HTTP_ERRORS.SERVER_ERROR;
                            break;
                        }
                        default: {
                            errorMessage = HttpConfig.HTTP_ERRORS.OTHER_ERROR;
                            break;
                        }
                    }
                    errorTitle = `${error.statusText}-${error.status}`;
                } else {

                    // 非服务器响应错误－－默认为timeout错误
                    errorMessage = HttpConfig.HTTP_ERRORS.TIMEOUT_ERROR;
                    errorTitle = 'TimeOut';
                }

                this.toast.danger(errorTitle, errorMessage, HttpConfig.TOAST_ERROR_TIME);
                return Observable.of<HttpResponse<any>>();

            })
            .map(res => {

                if (res instanceof HttpResponse) {

                    if (res.body != null && res.body.result != null) {
                        const apiData = new ApiData(res.body.result, res.body.message, res.body.datas);
                        if (apiData.result === false) {
                            if (apiData.messageStr !== HttpConfig.HTTP_ERRORS.CHECK_ERROR) {
                                this.toast.warning('操作失败', apiData.messageStr, HttpConfig.TOAST_ERROR_TIME);
                            }
                        }
                        res = res.clone<ApiData>({ body: apiData });

                    } else if (request.responseType !== 'text') {
                        res = res.clone<ApiData>({ body: new ApiData(false, HttpConfig.HTTP_ERRORS.API_DATA_ERROR) });
                    }
                }

                return res;
            });

        return handle;
    }
}
