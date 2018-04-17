import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../cores/services/theme.service';
import { ModalService } from 'ng-tools-ui';
import { PreviewModalComponent } from './preview-modal.component';

@Component({
    templateUrl: './article-edit.component.html',
})
export class ArticleEditComponent implements OnInit {

    content = `<h2>The three greatest things you learn from traveling</h2>
    <p>
        Like all the great things on earth traveling teaches us by example.
        Here are some of the most precious lessons I’ve learned over the years of traveling.
    </p>
    <figure class="image ck-widget" contenteditable="false">
        <img src="/assets/images/umbrellas.jpg" alt="Three Monks walking on ancient temple.">
        <figcaption class="ck-editor__editable ck-editor__nested-editable" contenteditable="true" data-placeholder="Enter image caption">
            Leaving your comfort zone might lead you to such beautiful sceneries like this one.
        </figcaption>
    </figure>`;

    options = {
        ckfinder: {
            uploadUrl: 'http://127.0.0.1/tooltest/upload'
        },
        language: 'zh_cn',
    };

    editor: any;

    constructor(public theme: ThemeService, private modal: ModalService) { }

    ngOnInit() {

    }

    setEditor(editor: any) {
        this.editor = editor;
    }

    showPreview() {
        this.modal.create(PreviewModalComponent, { center: true }).open();
        this.modal.instance.content = this.editor.getData();
    }
}
