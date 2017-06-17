import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Layout, Menu, Breadcrumb, Icon, DatePicker, Button } from 'antd'


import ReactEcharts from 'echarts-for-react'
import styles from '../styles.css'


class RecentInterfaceInvoke extends Component {
    constructor() {
        super()
    }

    option = {

        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params, ticket, callback) {

                return params[0].data;
            }
        },

        xAxis: {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['04-01', '04-02', '04-03', '04-04', '04-04', '04-05', '04-06']
        },
        yAxis: {
            type: 'value'

        },
        series: [
            {
                name: '接口调用',
                type: 'line',
                data: [11, 11, 15, 13, 12, 13, 10],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                color: ['RGB(247,183,61)']
            },
            {
                name: '接口调用',
                type: 'bar',
                data: [11, 11, 15, 13, 12, 13, 10],
                color: ['RGB(141,144,255)'],
                barWidth: 50
            }

        ]
    }

    render() {

        const { SubMenu } = Menu;
        const { Content, Footer, Sider } = Layout;
        const { MonthPicker, RangePicker } = DatePicker;


        const { commonTable, dispatch, menuState } = this.props;


        return (
            <div>
                <div className={styles.title}>
                    <Icon type="api" />
                    <span>最近接口调用情况</span>
                </div>
                <div className={styles.content}>
                    <ReactEcharts
                        option={this.option}
                        notMerge={true}
                        lazyUpdate={true} />
                </div>
            </div>

        )
    }

}



// 用connect方法连接HomePage组件，实际上是在HomePage组件上加上了Connect(HomePage)这个父组件，HomePage里有关Connect的state变化的props就是通过mapStateToProps设置的
// connect方法的第二个参数如果不传的话就会默认将store.dispatch默认作为了dispatch参数传进HomePage的props，所以HomePage的props里就有一个dispatch
export default RecentInterfaceInvoke