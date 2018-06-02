import { Component } from '@angular/core';
import { QuillOptions } from '../../../../../_tools-ui';
import { RequestService } from '../../../../cores/services';

@Component({
    templateUrl: './edit.component.html',
})
export class EditComponent {

    content = '';

    options: QuillOptions;

    constructor(
        private request: RequestService
    ) {
        this.options = {
            theme: 'snow',
            placeholder: '请输入文本内容',
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],
                    ['blockquote', 'code-block'],
                    [{ header: [1, 2, 3, 4, false] }],
                    [{ 'align': [] }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'font': [] }],
                    [{ 'direction': 'rtl' }],
                    ['link', 'image'],
                    ['clean']
                ]
            },
        };
        this.loadText();
    }

    loadText() {
        this.request.withoutHost().withoutHeader().
            text('https://hello1024.oss-cn-beijing.aliyuncs.com/upload/goods201806020404365b12c01485e25.txt')
            .subscribe(content => this.content = content);
    }

    confirmSave() {
        const blob = new Blob([this.content]);
        const file = new File([blob], 'temp.txt', { type: 'text/plain' });
        this.request.ossUpload('/store/goods/image/access', file)
            .subscribe(res => {
                console.log(res);
            });
    }
}
