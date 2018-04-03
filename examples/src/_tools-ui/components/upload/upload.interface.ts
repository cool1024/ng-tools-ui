import { Observable } from 'rxjs/Observable';

export interface UploadConfig {
    host: string;
    uploader?: (file: File) => Observable<string>;
    progresser?: (file: File) => Observable<number | string>;
}
