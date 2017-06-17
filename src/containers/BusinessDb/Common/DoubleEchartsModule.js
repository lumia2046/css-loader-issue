import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import css from '../CSS/BusinessDb.css'

import SJZL_ICON from '../Image/SJZL_ICON.png'

const SimpleChartComponent = React.createClass({
    propTypes: {
    },
    getOtion: function () {
        const option = {
            color: ['#F6B531', '#03A8F4'],
            // title: {
            //     text: '堆叠区域图'
            // },
            // tooltip: {
            //     trigger: 'axis'
            // },
            legend: {
                data: ['邮件营销', '联盟广告']
            },
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
                type: 'value',
                max: 400,
                min: 100,
                boundaryGap: [0.2, 0.2],
                axisLabel: {
                    formatter: '{value}%'
                }
            }, {
                type: 'value',
                max: 1200,
                min: 0,
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
                    // areaStyle: { normal: {} },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'bar',
                    stack: '总量',
                    // areaStyle: { normal: {} },
                    data: [220, 182, 191, 234, 290, 330, 310]
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
            <div>
                <div className={css.echartsHead}><img src={SJZL_ICON} /><font>数据增量态势图</font></div>
                <ReactEcharts className={css.echartsBody} option={this.getOtion()} style={{ height: 350 }} />
            </div>
        );
    }
});

export default SimpleChartComponent;