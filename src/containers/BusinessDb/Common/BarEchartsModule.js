import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import css from '../CSS/BusinessDb.css'

import SJZLPM_ICON from '../Image/SJZLPM_ICON.png'

const BarEchartsModule = React.createClass({
    propTypes: {
    },
    getOtion: function () {
        const option = {
            // color: ['#3398DB'],

            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['业务主题', '表总量', '数据数据量']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['总体', '学工', '人力', '财务', '教务', '图书']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '业务主题',
                    type: 'bar',
                    data: [320, 332, 301, 334, 390, 330]
                },
                {
                    name: '表总量',
                    type: 'bar',
                    data: [150, 232, 201, 154, 190, 330]
                },
                {
                    name: '数据数据量',
                    type: 'bar',
                    data: [862, 1018, 964, 1026, 1679, 1600]
                }
            ]
            
            // tooltip: {
            //     trigger: 'axis',
            //     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            //         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            //     }
            // },
            // grid: {
            //     left: '3%',
            //     right: '4%',
            //     bottom: '3%',
            //     containLabel: true
            // },
            // yAxis: [
            //     {
            //         type: 'category',
            //         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            //         axisTick: {
            //             alignWithLabel: true
            //         }
            //     }
            // ],
            // xAxis: [
            //     {
            //         type: 'value'
            //     }
            // ],
            // series: [
            //     {
            //         name: '直接访问',
            //         type: 'bar',
            //         barWidth: '60%',
            //         data: [10, 52, 200, 334, 390, 330, 220]
            //     }
            // ]

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
                <div className={css.echartsHead}><img src={SJZLPM_ICON} /><font>数据增量排名</font></div>
                <ReactEcharts className={css.echartsBody} option={this.getOtion()} style={{ height: 340 }} />
            </div>
        );
    }
});

export default BarEchartsModule;