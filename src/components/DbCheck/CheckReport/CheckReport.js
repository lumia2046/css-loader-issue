import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Dropdown, message, Breadcrumb, Icon, Footer, Button, Input, Row, Col, Tree, Pagination } from 'antd'
import CommonTable from '../../common/CommonTable/CommonTable'
import app from '../images/app.png'
import styles from './styles.css'
import ReactEcharts from 'echarts-for-react'
import CheckItem from './CheckItem'
import CheckResult from './CheckResult'
import CheckSurvey from './CheckSurvey'
import TableComplete from './TableComplete'
import FieldComplete from './FieldComplete'
import FieldConsistency from './FieldConsistency'

class CheckReport extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div style={{ padding: 20 }}>
                <div>
                    <h2 style={{ textAlign: 'center', fontSize: '30px', color: 'RGB(3,169,245)' }}>
                        <Icon type="ellipsis" />
                        <span> 核检报告 </span>
                        <Icon type="ellipsis" />
                    </h2>
                    <CheckItem />
                    <CheckResult />
                </div>
                <div>
                    <h3>
                        <span style={{ fontSize: '25px', color: 'RGB(3,169,245)', borderLeft: '5px solid RGB(3,169,245)', paddingLeft: 5 }}> 学工系统检验报告</span>
                        <span style={{ marginLeft: 20 }}>健康指数：75</span>
                        <span style={{ marginLeft: 20 }}>检验时间：2017-04-24</span>
                    </h3>
                    <CheckSurvey />
                    <TableComplete />
                    <FieldComplete />
                    <FieldConsistency />
                </div>
            </div>

        )
    }
}



export default CheckReport