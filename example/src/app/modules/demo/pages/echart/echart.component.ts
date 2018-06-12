import { Component } from '@angular/core';
import { EchartsInstance } from '../../../../../_tools-ui';
import { RequestService } from '../../../../cores/services';

@Component({
    templateUrl: './echart.component.html',
})
export class EchartComponent {

    private chart: EchartsInstance;

    optionOne = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    optionTwo = {
        backgroundColor: '#2c343c',

        title: {
            text: 'Customized Pie',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [
                    { value: 335, name: '直接访问' },
                    { value: 310, name: '邮件营销' },
                    { value: 274, name: '联盟广告' },
                    { value: 235, name: '视频广告' },
                    { value: 400, name: '搜索引擎' }
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };

    optionThree: any = {
        xAxis: {
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLabel: {
                inside: true,
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            z: 10
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            }
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        series: [
            {
                type: 'bar',
                itemStyle: {
                    normal: { color: 'rgba(0,0,0,0.05)' }
                },
                barGap: '-100%',
                barCategoryGap: '40%',
                data: [500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500],
                animation: false
            },
            {
                type: 'bar',
                itemStyle: {
                    normal: {},
                    emphasis: {}
                },
                data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220]
            }
        ]
    };

    serveDatas: any = { "r": "2", "b": "0", "swpd": "0", "free": "897184", "buff": "443756", "cache": "2945936", "si": "0", "so": "0", "bi": "13", "bo": "20", "in": "259", "cs": "239", "us": "5", "sy": "2", "id": "93", "wa": "0" };

    constructor(private request: RequestService) {
        this.request.websocket('ws://192.168.1.166:8080').subscribe(message => {
            console.log(message);
            try {
                this.serveDatas = JSON.parse(message);
            } catch (e) {
                this.serveDatas = { r: 0, us: 0, free: 0 };
            }
        });
    }

    setChart(handle: { echartsInstance: EchartsInstance, echarts: any }) {
        this.chart = handle.echartsInstance;
        this.optionThree.series[1].itemStyle = {
            normal: {
                color: new handle.echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        { offset: 0, color: '#83bff6' },
                        { offset: 0.5, color: '#188df0' },
                        { offset: 1, color: '#188df0' }
                    ]
                )
            },
            emphasis: {
                color: new handle.echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        { offset: 0, color: '#2378f7' },
                        { offset: 0.7, color: '#2378f7' },
                        { offset: 1, color: '#83bff6' }
                    ]
                )
            }
        };
        this.chart.setOption(this.optionThree);
    }

    randomData() {
        if (this.chart) {
            this.optionThree.series[1].data = [
                Math.random() * 500,
                Math.random() * 500,
                Math.random() * 500,
                Math.random() * 500,
                Math.random() * 500,
                Math.random() * 500,
                Math.random() * 500,
                Math.random() * 500,
                Math.random() * 500,
                Math.random() * 500,
                Math.random() * 500,
                Math.random() * 500,
            ];
            this.chart.setOption(this.optionThree);
        }
    }
}
