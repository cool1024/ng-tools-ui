
import {
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
    Directive,
} from '@angular/core';
import { ScriptService } from './../../commons/services/script.service';
import { QuillOptions } from './quill.interface';
declare const window: any;

@Directive({
    selector: '*[tsQuill]',
    exportAs: 'tsQuill',
})

export class QuillDirective implements AfterViewInit, OnInit, OnChanges {


    @Input() content: string;

    @Input() options: QuillOptions;

    @Output() load = new EventEmitter<any>();

    @Output() contentChange = new EventEmitter<string>();

    private noUpdateContent = false;

    private quill: any;

    private textarea: HTMLTextAreaElement;

    private ready: boolean;

    constructor(
        private elementRef: ElementRef,
        private script: ScriptService,
        @Inject('QUILL_SCRIPT_SRCS') private srcs: string[]
    ) {
        this.content = '';
        this.options = { theme: 'snow', placeholder: 'Compose an epic...' };
    }

    ngOnChanges(change: SimpleChanges) {
        if (change.content
            && !change.content.firstChange
            && change.content.previousValue !== change.content.currentValue) {
            this.updateContent();
            console.log(111);
        }
    }

    ngOnInit() {
        this.script.loads(this.srcs, !!window.Quill);
    }

    ngAfterViewInit() {
        this.textarea = this.elementRef.nativeElement;
        this.script.complete(() => {
            this.quill = new window.Quill(this.textarea, this.options);
            this.ready = true;
            this.updateContent();
            this.quill.on('text-change', () => {
                this.noUpdateContent = true;
                this.contentChange.emit(this.quill.root.innerHTML);
            });
        });
    }

    updateContent() {
        if (this.ready && !this.noUpdateContent) {
            this.quill.clipboard.dangerouslyPasteHTML(this.content);
        }
        this.noUpdateContent = false;
    }
}
