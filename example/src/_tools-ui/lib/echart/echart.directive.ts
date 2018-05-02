
import { Directive, ElementRef, Input, Output, OnInit, AfterViewInit, EventEmitter, Inject, OnDestroy } from '@angular/core';
import { ScriptService } from './../../commons/services/script.service';
declare const window: any;

@Directive({
    selector: 'div[baseEchart]',
    exportAs: 'baseEchart',
})

export class BaseEchartDirective implements OnInit, AfterViewInit, OnDestroy {

    @Input() option: any;

    @Input() resize: boolean;

    @Output() chartLoad = new EventEmitter<any>();

    private echart: any;

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

    ngAfterViewInit() {
        this.script.complete(() => {
            this.echart = window.echarts.init(this.elementRef.nativeElement);
            this.echart.setOption(this.option);
            this.chartLoad.emit(this.echart);
            if (this.resize) {
                window.addEventListener('resize', this.resizeChart);
            }
            setTimeout(() => this.echart.resize(), 2000);
        });
    }

    ngOnDestroy() {
        window.removeEventListener('resize', this.resizeChart);
    }
}
