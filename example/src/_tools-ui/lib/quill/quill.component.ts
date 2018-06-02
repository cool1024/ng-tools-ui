
import {
    Component,
    ViewChild,
    ElementRef,
    AfterViewInit,
    OnChanges,
    SimpleChanges,
    Input,
    ViewEncapsulation,
    Output,
    EventEmitter,
    OnInit,
    Inject,
} from '@angular/core';
import { ScriptService } from './../../commons/services/script.service';
import { QuillOptions } from './quill.interface';
declare const window: any;

@Component({
    selector: 'ts-quill',
    exportAs: 'tsQuill',
    template: `<div #editor></div>`,
    styles: [],
    encapsulation: ViewEncapsulation.Emulated,
})

export class QuillComponent implements AfterViewInit, OnInit, OnChanges {

    @ViewChild('editor') editor: ElementRef;

    @Input() content: string;

    @Input() options: QuillOptions;

    @Output() load = new EventEmitter<any>();

    @Output() contentChange = new EventEmitter<string>();

    private quill: any;

    private textarea: HTMLTextAreaElement;

    private ready: boolean;

    constructor(
        private script: ScriptService,
        @Inject('QUILL_SCRIPT_SRCS') private srcs: string[]
    ) {
        this.content = '';
        this.options = { theme: 'snow', placeholder: 'Compose an epic...' };
    }

    ngOnChanges(change: SimpleChanges) {
        this.updateContent();
    }

    ngOnInit() {
        this.script.loads(this.srcs, !!window.Quill);
    }

    ngAfterViewInit() {
        this.textarea = this.editor.nativeElement;
        this.script.complete(() => {

            this.quill = new window.Quill(this.textarea, this.options);
            // window.ClassicEditor
            //     .create(this.textarea, this.options)
            //     .then((editor: any) => {
            //         this.editroHandle = editor;
            //         this.ready = true;
            //         this.load.emit(this.editroHandle);
            //         this.updateContent();
            //     })
            //     .catch((error: any) => {
            //         console.error(error);
            //     });
        });
    }

    updateContent() {
        // if (this.ready) {
        //     this.editroHandle.setData(this.content);
        // }
    }
}
