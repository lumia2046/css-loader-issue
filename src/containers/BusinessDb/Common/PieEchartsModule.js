import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import css from '../CSS/BusinessDb.css'

import XTSJFB_ICON from '../Image/XTSJFB_ICON.png'

const PieEchartsModule = React.createClass({
    propTypes: {
    },
    getOtion: function () {
        const option = {
            //		title : {
            //			text : '系统数据分布',
            //			subtext : '纯属虚构',
            //			x : 'center',
            //	        backgroundColor: '#E5E5E5',
            //			textStyle: {  
            //				color: '#5BAFF1'  
            //			} 
            //		},
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                x: 'center',
                y: 'bottom'
            },
            calculable: true,
            series: [
                {
                    name: '面积模式',
                    type: 'pie',
                    radius: [30, 110],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    data: [
                        { value: 10, name: 'rose1' },
                        { value: 5,  name: 'rose2' },
                        { value: 15, name: 'rose3' },
                        { value: 25, name: 'rose4' },
                        { value: 20, name: 'rose5' },
                        { value: 35, name: 'rose6' },
                        { value: 30, name: 'rose7' },
                        { value: 40, name: 'rose8' }
                    ]
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
                <div className={css.echartsHead}><img src={XTSJFB_ICON} /><font>系统数据分布</font></div>
                <ReactEcharts className={css.echartsBody} option={this.getOtion()} style={{ height: 350 }} />
            </div>
        );
    }
});

export default PieEchartsModule;