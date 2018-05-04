import {
    Directive,
    QueryList,
    ContentChildren,
    forwardRef,
    AfterViewInit,
    ChangeDetectorRef,
} from '@angular/core';
import { CheckboxComponent } from './checkbox.component';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


@Directive({
    selector: '*[tsCheckboxGroup]',
    exportAs: 'tsCheckboxGroup',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CheckboxDirective),
        multi: true
    }]
})
export class CheckboxDirective implements AfterViewInit, ControlValueAccessor {

    private values: Array<any>;

    private isReady: boolean;

    @ContentChildren(forwardRef(() => CheckboxComponent)) checkboxList: QueryList<CheckboxComponent>;

    applyChange = (value: any) => { };

    constructor(private cdRef: ChangeDetectorRef) {
        this.values = [];
        this.isReady = false;
    }

    ngAfterViewInit() {
        this.isReady = true;
    }

    writeValue(value: any) {
        this.values = value;
        if (this.isReady) {
            this.replyValue();
        }
    }

    registerOnChange(fn: any): void { this.applyChange = fn; }

    registerOnTouched(fn: any): void { }

    replyValue() {
        const checkboxList = this.checkboxList.toArray();
        for (const checkbox of checkboxList) {
            if (this.values.indexOf(checkbox.value) >= 0) {
                checkbox.checked = true;
            } else {
                checkbox.checked = false;
            }
        }
        this.cdRef.detectChanges();

    }

    applyCheckboxChange() {
        this.values = [];
        this.checkboxList.forEach(checkbox => {
            if (checkbox.checked) {
                this.values.push(checkbox.value);
            }
        });
        this.applyChange(this.values);
        this.cdRef.detectChanges();
    }
}
