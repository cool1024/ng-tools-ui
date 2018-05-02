import {
    Directive,
    Input,
    Output,
    EventEmitter,
    HostListener,
    QueryList,
    ContentChildren,
    forwardRef,
    AfterContentInit,
    OnChanges,
    SimpleChanges,
    ChangeDetectorRef
} from '@angular/core';
import { RadioComponent } from './radio.component';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
    selector: '*[tsRadioGroup]',
    exportAs: 'tsRadioGroup',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => RadiosDirective),
        multi: true
    }]
})
export class RadiosDirective implements AfterContentInit, ControlValueAccessor {

    // @Input() value: any;
    // @Output() valueChange = new EventEmitter<any>(false);
    @ContentChildren(forwardRef(() => RadioComponent)) radioList: QueryList<RadioComponent>;

    applyChange: (value: any) => void;
    private value: any;
    private isReady: boolean;
    constructor(private cdRef: ChangeDetectorRef) {
        this.isReady = false;
    }

    ngAfterContentInit() {
        this.replyValue();
        this.isReady = true;
    }

    replyValue() {
        const radioList = this.radioList.toArray();
        for (let i = 0; i < this.radioList.length; i++) {
            if (radioList[i].value === this.value) {
                radioList[i].checked = true;
            } else {
                radioList[i].checked = false;
            }
        }
        this.cdRef.detectChanges();
    }

    writeValue(value: any) {
        this.value = value;
        if (this.isReady) {
            this.replyValue();
        }
    }

    registerOnChange(fn: any): void { this.applyChange = fn; }

    registerOnTouched(fn: any): void { }

    applyRadioValue() {
        const radioList = this.radioList.toArray();
        radioList.forEach(radio => {
            if (this.value !== radio.value) { radio.checked = false; }
        });
        this.cdRef.detectChanges();
    }

    applyRadioChange(handle: { checked: boolean, value: any }) {
        if (handle.value !== undefined) {
            this.value = handle.checked === true ? handle.value : null;
            this.applyChange(this.value);
        } else if (handle.checked === true) {
            this.value = null;
            this.applyChange(this.value);
        }
        this.applyRadioValue();
    }

}
