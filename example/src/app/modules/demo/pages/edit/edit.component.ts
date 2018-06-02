import { Component } from '@angular/core';
import { QuillOptions } from '../../../../../_tools-ui';

@Component({
    templateUrl: './edit.component.html',
})
export class EditComponent {

    content = `
    <h4>这个是h4的标题</h4>
    <hr>
    <img src="assets/images/material-3.jpg"></img>
    `;

    options = { language: 'zh_cn' };

    quillOptions: QuillOptions;

    constructor() {
        this.quillOptions = {
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
    }

}
