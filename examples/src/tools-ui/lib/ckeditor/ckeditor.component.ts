
import {
    Component,
    ViewChild,
    ElementRef,
    AfterViewInit,
    OnChanges,
    SimpleChanges,
    Input,
    ViewEncapsulation
} from '@angular/core';
declare const ClassicEditor: any;

@Component({
    selector: 'ts-ckeditor',
    exportAs: 'tsCkeditor',
    template: '<textarea #editor>42341231</textarea>',
    styles: [
        `.ck-editor__main {
            height: 400px !important;
        }`
    ],
    encapsulation: ViewEncapsulation.Emulated,
})

export class CkeditorComponent implements AfterViewInit, OnChanges {

    @ViewChild('editor') editor: ElementRef;

    private editroHandle: any;

    private textarea: HTMLTextAreaElement;

    private ready: boolean;

    constructor() { }

    ngOnChanges(change: SimpleChanges) {
        this.updateContent();
    }

    ngAfterViewInit() {

        this.textarea = this.editor.nativeElement;

        if (!ClassicEditor) {
            console.error('ClassicEditor not found,please import ckeditor.js');
            return;
        }

        ClassicEditor
            .create(this.textarea, {
                ckfinder: {
                    uploadUrl: 'http://127.0.0.1/webblog/tools-ui/upload'
                },
                language: 'zh_cn',
                height: '300',
            })
            .then(editor => {
                this.editroHandle = editor;
                console.log(this.editroHandle);
                setInterval(() => {
                    console.log(this.textarea.value);
                }, 100);
            })
            .catch(error => {
                console.error(error);
            });

        this.ready = true;
        this.updateContent();
    }

    updateContent() {
        if (this.ready) {

        }
    }
}
