import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Dropdown, message, Breadcrumb, Icon, Footer, Button, Input, Row, Col, Tree, Pagination } from 'antd'
import CommonTable from '../../common/CommonTable/CommonTable'
import app from '../images/app.png'
import styles from './styles.css'
import ReactEcharts from 'echarts-for-react'

class CheckSurvey extends Component {
    constructor() {
        super()
    }

    
    processOption = {
        series: [
            {
                name: '问题率',
                type: 'pie',
                hoverAnimation:false,
                radius: ['60%', '70%'],
                avoidLabelOverlap: false,
                color: ['RGB(71,186,193)', 'RGB(232,232,232)'],
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        formatter: `65.00%\n问题率`,
                        textStyle: {
                            fontSize: '25',
                            color: 'RGB(71,186,193)'
                        }
                    }

                },
                itemStyle:{
                    emphasis:{
                        color: ['RGB(71,186,193)']
                    }
                },
                data: [
                    { value: 65, name: '' },
                    { value: 35, name: '' }
                ],
                startAngle: 270
            }
        ]
    }

    surveyOption = {
        xAxis: [
            {
                type: 'category',
                data: ['表完整性', '字段完整性', '字段一致性'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: {
            splitLine: { show: true }
        },
        series: [{
            name: '',
            type: 'bar',
            barWidth: "30%",
            data: [18, 27, 48],
            color: ['RGB(185,191,253)']
        }]
    }

    onChartReady() {

    }

    onEvents = {

    }
    render() {
        return (

                <div>
                    <h4 style={{ padding: '20px 0 10px', color: 'RGB(3,169,245)', fontSize: '20px' }}><Icon type="appstore-o" />核验概况</h4>
                    <div style={{ width: '35%', verticalAlign: 'middle', display: 'inline-block' }}>
                        <table className={styles.table}>
                            <tbody>
                                <tr>
                                    <td>核验表总数</td>
                                    <td>512</td>
                                </tr>
                                <tr>
                                    <td>核验字段数</td>
                                    <td>3672</td>
                                </tr>
                                <tr>
                                    <td>表完整性</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>字段完整性</td>
                                    <td>110</td>
                                </tr>
                                <tr>
                                    <td>字段一致性</td>
                                    <td>351</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{ width: '30%', verticalAlign: 'middle', display: 'inline-block' }}>
                        <ReactEcharts
                            option={this.processOption}
                            notMerge={true}
                            lazyUpdate={true}
                            onChartReady={this.onChartReady}
                            onEvents={this.onEvents}/>
                    </div>
                    <div style={{ width: '35%', verticalAlign: 'middle', display: 'inline-block' }}>
                        <ReactEcharts
                            option={this.surveyOption}
                            notMerge={true}
                            lazyUpdate={true}
                            onChartReady={this.onChartReady}
                            onEvents={this.onEvents} />
                    </div>
                </div>
        )
    }
}



export default CheckSurvey