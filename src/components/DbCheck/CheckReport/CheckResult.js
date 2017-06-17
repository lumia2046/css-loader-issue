import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Dropdown, message, Breadcrumb, Icon, Footer, Button, Input, Row, Col, Tree, Pagination } from 'antd'
import CommonTable from '../../common/CommonTable/CommonTable'
import app from '../images/app.png'
import styles from './styles.css'
import ReactEcharts from 'echarts-for-react'

class CheckResult extends Component {
    constructor() {
        super()
    }

    resultOption = {
        xAxis: {
            type: 'category',
            data: ['学工管理系统', '人事管理系统', '教务管理系统', '迎新系统', '离校系统'],
            axisTick: { show: false },

        },
        yAxis: {
            splitLine: { show: true }
        },
        legend: {
            orient: 'horizontal',
            x: 'right',
            data: ['表完整性', '字段完整性', '字段一致性']
        },
        series: [{
            name: '表完整性',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'RGB(71,186,193)'
                }
            },
            silent: true,
            barWidth: 20,
            barGap: '20%', // Make series be overlap
            data: [10, 25, 36, 48, 33]
        }, {
            name: '字段完整性',
            type: 'bar',
            barWidth: 20,
            z: 10,
            data: [8, 20, 32, 42, 30],
            itemStyle: {
                normal: {
                    color: 'RGB(127,200,233)'
                }
            },
        },
        {
            name: '字段一致性',
            itemStyle: {
                normal: {
                    color: 'RGB(181,226,229)'
                }
            },
            type: 'bar',
            barWidth: 20,
            z: 10,
            data: [6, 15, 27, 38, 25]
        }]
    }

    onChartReady() {

    }

    onEvents = {

    }
    render() {
        return (
            <div >
                <h4 style={{ color: 'RGB(3,169,245)', fontSize: '20px' }}>
                    <Icon type="bars" />
                    <span> 核验结果</span>
                </h4>
                <div>
                    <div style={{ padding:' 0 20PX', width: '23%', display: 'inline-block', verticalAlign: 'middle',borderRight:'2px solid #ccc' }}>
                        <p>本次核验主要核验了以下业务系统：</p>
                        <p><span style={{ font:'italic normal 20px sans-serif' }}>1.</span>学工系统</p>
                        <p><span style={{ font:'italic normal 20px sans-serif' }}>2.</span>人事管理系统</p>
                        <p><span style={{ font:'italic normal 20px sans-serif' }}>3.</span>教务管理系统</p>
                        <p><span style={{ font:'italic normal 20px sans-serif' }}>4.</span>迎新系统</p>
                        <p><span style={{ font:'italic normal 20px sans-serif' }}>5.</span>离校系统</p>
                    </div>
                    <div style={{ paddingLeft:30, width: '20%', display: 'inline-block', verticalAlign: 'middle' }}>
                        <p>核验总表数 <span style={{ font:'italic bold 20px sans-serif',padding:5,color:'RGB(103,219,165)' }}>1059</span>张，</p>
                        <p>发现异常项 <span style={{ font:'italic bold 20px sans-serif',padding:5,color:'RGB(252,137,135)' }}>353</span>项，</p>
                        <p>其中表完整性异常 <span style={{ font:'italic bold 20px sans-serif',padding:5,color:'RGB(115,211,223)' }}>73</span>项，</p>
                        <p>核验总表数 <span style={{ font:'italic bold 20px sans-serif',padding:5,color:'RGB(61,179,234)' }}>126</span>项，</p>
                        <p>核验总表数 <span style={{ font:'italic bold 20px sans-serif',padding:5,color:'RGB(236,198,97)' }}>154</span>项。</p>
                    </div>
                    <div style={{ width: '57%', display: 'inline-block', verticalAlign: 'middle' }}>
                        <ReactEcharts
                            option={this.resultOption}
                            notMerge={true}
                            lazyUpdate={true}
                            onChartReady={this.onChartReady}
                            onEvents={this.onEvents} />
                    </div>
                </div>
            </div>
        )
    }
}



export default CheckResult