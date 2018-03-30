import {
    Directive,
    Input,
    Output,
    EventEmitter,
    QueryList,
    ContentChildren,
    forwardRef,
    AfterContentInit,
    OnChanges,
    SimpleChanges,
    ChangeDetectorRef,
    DoCheck
} from '@angular/core';
import { CheckboxComponent } from './checkbox.component';

@Directive({
    selector: '*[tsCheckboxGroup]',
    exportAs: 'tsCheckboxGroup'
})
export class CheckboxDirective implements AfterContentInit, OnChanges {

    @Input() values: Array<any>;
    @Output() valuesChange = new EventEmitter<any>();
    @ContentChildren(forwardRef(() => CheckboxComponent)) checkboxList: QueryList<CheckboxComponent>;

    constructor(private cdRef: ChangeDetectorRef) { }

    ngAfterContentInit() {
        this.replyValue();
    }

    ngOnChanges(simpleChanges: SimpleChanges) {
        if (simpleChanges.values && !simpleChanges.values.isFirstChange()) {
            this.replyValue();
        }
    }

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
        this.valuesChange.emit(this.values);
        this.cdRef.detectChanges();
    }
}
