import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Dropdown, message, Breadcrumb, Icon, Footer, Button, Input, Row, Col, Tree, Pagination } from 'antd'
import CommonTable from '../../common/CommonTable/CommonTable'
import app from '../images/app.png'
import styles from './styles.css'
import ReactEcharts from 'echarts-for-react'


class CheckItem extends Component {
    constructor() {
        super()
    }

    itemCircleData = [
        { key: '离校系统', value: 270 },
        { key: '人事管理系统', value: 150 },
        { key: '迎新系统', value: 72 },
        { key: '教务管理系统', value: 260 },
        { key: '学工系统', value: 287 },
    ]

    getPercent(value) {
        let total = 0;
        for (let i = 0; i < this.itemCircleData.length; i++) {
            total += this.itemCircleData[i].value
        }

        return Math.round(value * 10000 / total) / 100 + '%'
    }
    itemOption = {
        title: {
            show: false,
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x: 'center'
        },
        legend: {
            show: false,
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
            {
                name: '检验报告',
                type: 'pie',
                radius: '100%',
                center: ['50%', '50%'],
                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                color: ['rgba(0,0,0,0)'],
                data: this.itemCircleData.map((data) => {
                    return { value: data.value, name: this.getPercent(data.value) }
                }),
                startAngle: 88
            },
            {
                name: '检验报告',
                type: 'pie',
                radius: '80%',
                center: ['50%', '50%'],
                data: this.itemCircleData.map((data) => {
                    return { value: data.value, name: `${data.key}\n异常数${data.value}` }
                }),
                color: ['RGB(42,185,251)', 'RGB(236,198,97)', 'RGB(66,184,198)', 'RGB(255,133,130)', 'RGB(97,222,164)'],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                startAngle: 88
            }
        ]
    }

    onChartReady() {

    }

    onEvents = {

    }
    render() {
        return (
            <div>
                <h4 style={{ color: 'RGB(3,169,245)', fontSize: '20px' }}>
                    <Icon type="bars" />
                    <span> 核检项目</span>
                </h4>
                <div style={{ padding: 30, width: '40%', display: 'inline-block' }}>
                    <p>1.核验表完整性</p>
                    <p style={{paddingLeft:15}}>1)核验标准中定义的表在物理库中是否存在</p>
                    <p style={{paddingLeft:15}}>2)核验物理库中存在的表是否在标准中都有定义</p>
                    <br />
                    <p>2.核验字段完整性</p>
                    <p style={{paddingLeft:15}}>1)核验标准中定义的字段在物理库中是否存在</p>
                    <p style={{paddingLeft:15}}>2)核验物理库中存在的字段是否在标准中都有定义</p>
                    <br />
                    <p>3.核验自断一致性</p>
                    <p style={{paddingLeft:15}}>1)核验物理库中字段的类型是否和标准中定义的一致</p>
                    <p style={{paddingLeft:15}}>2)核验物理库中字段的长度是否和标准中定义的一致</p>
                    <p style={{paddingLeft:15}}>3)核验物理库中字段是否为空属性是否和标准中定义一致</p>
                    <p style={{paddingLeft:15}}>4)核验物理库中字段是否是主见属性是否和标准中定义一致</p>
                    <br />
                    <p>4.生成解决异常的同步脚本</p>
                </div>
                <div style={{ width: '60%', display: 'inline-block' }}>
                    <ReactEcharts
                        option={this.itemOption}
                        notMerge={true}
                        lazyUpdate={true}
                        onChartReady={this.onChartReady}
                        onEvents={this.onEvents} />
                </div>
            </div>
        )
    }
}



export default CheckItem