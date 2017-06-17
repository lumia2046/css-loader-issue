import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import css from '../CSS/BusinessDb.css'

import XTSJFB_ICON from '../Image/XTSJFB_ICON.png'
import SJZL_ICON from '../Image/SJZL_ICON.png'


const LineEchartsModule = React.createClass({
    propTypes: {
    },
    getOtion: function () {
        const option = {
            color: ['#FAB73D'],
            // title: {
            //     text: '堆叠区域图'
            // },
            // tooltip: {
            //     trigger: 'axis'
            // },
            // legend: {
            //     data: ['邮件营销']
            // },
            // toolbox: {
            //     feature: {
            //         saveAsImage: {}
            //     }
            // },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,
                    data: ['06-01', '06-02', '06-03', '06-04', '06-05', '06-06', '06-07']
                }
            ],
            yAxis: [{
                name: '操作量',
                type: 'value',
                max: 250,
                min: 50,
                boundaryGap: [0.2, 0.2],
                axisLabel: {
                    formatter: '{value}'
                }
            }],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    label: {
                        emphasis: {
                            show: true,
                            position: 'right',
                            textStyle: {
                                color: 'blue',
                                fontSize: 16
                            }
                        }
                    },
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    areaStyle: { normal: {} },
                    data: [120, 132, 101, 134, 90, 230, 210]
                }
            ]
        };
        return option;
    },
    render: function () {
        let code = "<ReactEcharts \n" +
            "    option={this.getOtion()} \n" +
            "    style={{height: '350px', width: '100%'}}  \n" +
            "    className='react_for_echarts' />";
        return (
            <div >
                <div className={css.echartsHead}><img src={SJZL_ICON} /><font>数据操作量</font></div>
                <ReactEcharts className={css.echartsBody} option={this.getOtion()} style={{ height: 350 }} />
            </div>
        );
    }
});

export default LineEchartsModule;