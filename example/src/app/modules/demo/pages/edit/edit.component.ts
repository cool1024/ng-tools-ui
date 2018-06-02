import { Component } from '@angular/core';
import { QuillOptions } from '../../../../../_tools-ui';

@Component({
    templateUrl: './edit.component.html',
})
export class EditComponent {

    content = `
    <h4>这个是h4的标题</h4>
    <hr>
    <img src="http://127.0.0.1:4200/assets/images/material-3.jpg"></img>
    `;

    options = { language: 'zh_cn' };

    quillOptions: QuillOptions;

    constructor() {
        this.quillOptions = {
            theme: 'snow',
            placeholder: '请输入文本内容',
            modules: {
                toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline'],
                    ['image']
                ]
            },
        };
    }

}
