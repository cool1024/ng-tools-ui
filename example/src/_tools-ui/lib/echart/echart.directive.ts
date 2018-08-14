
import { Directive, ElementRef, Input, Output, OnInit, AfterViewInit, OnChanges, EventEmitter, Inject, OnDestroy, SimpleChanges } from '@angular/core';
import { ScriptService } from './../../commons/services/script.service';
import { EchartsInstance } from './echart.interface';
declare const window: any;

@Directive({
    selector: 'div[baseEchart]',
    exportAs: 'baseEchart',
})

export class BaseEchartDirective implements OnInit, OnChanges, AfterViewInit, OnDestroy {

    @Input() option: any;

    @Input() resize: boolean;

    @Output() chartLoad = new EventEmitter<{ echartsInstance: EchartsInstance, echarts: any }>();

    private echart: EchartsInstance;

    constructor(
        private script: ScriptService,
        private elementRef: ElementRef,
        @Inject('ECHART_SCRIPT_SRC') private src: string,
    ) {
        this.resize = false;
    }

    resizeChart = () => {
        this.echart.resize();
    }

    ngOnInit() {
        this.script.load(this.src, window.echarts);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.echart && changes.option && !changes.option.firstChange) {
            this.echart.setOption(changes.option.currentValue);
        }
    }

    ngAfterViewInit() {
        this.script.complete(() => {
            this.echart = window.echarts.init(this.elementRef.nativeElement);
            this.echart.setOption(this.option);
            this.chartLoad.emit({
                echartsInstance: this.echart,
                echarts: window.echarts,
            });
            if (this.resize) {
                window.addEventListener('resize', this.resizeChart);
            }
            setTimeout(() => this.echart.resize(), 1000);
        });
    }

    ngOnDestroy() {
        window.removeEventListener('resize', this.resizeChart);
    }
}
