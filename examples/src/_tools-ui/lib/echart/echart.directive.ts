
import { Directive, ElementRef, Input, Output, OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import { ScriptService } from './../../commons/services/script.service';
declare const window: any;

@Directive({
    selector: 'div[baseEchart]',
    exportAs: 'baseEchart',
})

export class BaseEchartDirective implements OnInit, AfterViewInit {

    @Input() src: string;

    @Input() option: any;

    @Output() chartLoad = new EventEmitter<any>();

    private echart: any;

    constructor(
        private script: ScriptService,
        private elementRef: ElementRef
    ) { }

    ngOnInit() {
        this.script.load(this.src, window.echarts);
    }

    ngAfterViewInit() {
        this.script.complete(() => {
            this.echart = window.echarts.init(this.elementRef.nativeElement);
            this.echart.setOption(this.option);
            this.chartLoad.emit(this.echart);
        });
    }
}
