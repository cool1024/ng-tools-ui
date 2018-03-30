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

@Directive({
    selector: '*[tsRadioGroup]',
    exportAs: 'tsRadioGroup',
})
export class RadiosDirective implements AfterContentInit, OnChanges {

    @Input() value: any;
    @Output() valueChange = new EventEmitter<any>(false);
    @ContentChildren(forwardRef(() => RadioComponent)) radioList: QueryList<RadioComponent>;

    constructor(private cdRef: ChangeDetectorRef) { }

    ngAfterContentInit() {
        this.replyValue();
    }

    ngOnChanges(simpleChanges: SimpleChanges) {
        if (simpleChanges.hasOwnProperty('value') && !simpleChanges.value.isFirstChange()) {
            this.replyValue();
        }
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
            this.valueChange.emit(this.value);
        } else if (handle.checked === true) {
            this.value = null;
            this.valueChange.emit(this.value);
        }
        this.applyRadioValue();
    }

}
