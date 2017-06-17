import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Select, Breadcrumb, Icon, Footer, Button, Input, Row, Col, Tree, Pagination } from 'antd'
import CommonTable from '../../common/CommonTable/CommonTable'
import app from '../images/app.png'
import styles from './styles.css'
import ReactEcharts from 'echarts-for-react'

const Option = Select.Option;

class TableComplete extends Component {
    constructor() {
        super()
    }

    select = ['标准库中存在，物理库中不存在', '物理库中存在，标准库中不存在']

    handleChange = (value) => {
        console.log(value);  // { key: "lucy", label: "Lucy (101)" }
    }


    render() {
        const columns = [
            {
                title: '表名',
                dataIndex: 'tableName',
                key: 'tableName'
            }, {
                title: '异常描述',
                dataIndex: 'exceptionDescribe',
                key: 'exceptionDescribe'
            }
        ];

        const data = [
            {
    
                tableName: "LY_RSGL_XT",
                exceptionDescribe:this.select[0]
            }, {
    
                tableName: "LY_RSGL_XT",
                exceptionDescribe:this.select[1]
            }, {
    
                tableName: "LY_RSGL_XT",
                exceptionDescribe:this.select[0]
            }, {
    
                tableName: "LY_RSGL_XT",
                exceptionDescribe:this.select[1]
            }, {
    
                tableName: "LY_RSGL_XT",
                exceptionDescribe:this.select[0]
            }
        ];
        const url = "http://xxxx.com";
        const pageSize = 10;
        const pagination = data
            ? {
                total: data.length,
                current: 1,
                pageSize: pageSize
            }
            : {}
        const tableData = data
            ? {
                columns,
                data,
                pagination,
                pageSize,
                url
            }
            : {
                columns,
                pageSize,
                url
            }
        return (

            <div>
                <h4 style={{ padding: '20px 0 10px', color: 'RGB(3,169,245)', fontSize: '20px' }}><Icon type="appstore-o" />表完整性</h4>
                <p style={{ padding: '20px 0'}}>
                    类型：
                    <Select labelInValue defaultValue={{ key: '1' }}  onChange={this.handleChange}>
                        <Option value="1">{this.select[0]}</Option>
                        <Option value="2">{this.select[1]}</Option>
                    </Select>
                </p>
                <div style={{}}>
                    <CommonTable {...({ tableData}) } />
                </div>
            </div>
        )
    }
}



export default TableComplete