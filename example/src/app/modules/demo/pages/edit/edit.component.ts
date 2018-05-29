import { Component } from '@angular/core';

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

}
