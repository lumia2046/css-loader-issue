import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Select, Breadcrumb, Icon, Footer, Button, Input, Row, Col, Tree, Pagination } from 'antd'
import CommonTable from '../../common/CommonTable/CommonTable'
import app from '../images/app.png'
import styles from './styles.css'
import ReactEcharts from 'echarts-for-react'

const Option = Select.Option;

class FieldComplete extends Component {
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
                title: '字段名称',
                dataIndex: 'fieldName',
                key: 'fieldName'
            }, {
                title: '中文简称',
                dataIndex: 'ChineseName',
                key: 'ChineseName'
            }, {
                title: '类型',
                dataIndex: 'type',
                key: 'type'
            }, {
                title: '长度',
                dataIndex: 'length',
                key: 'length'
            }, {
                title: '异常描述',
                dataIndex: 'exceptionDescribe',
                key: 'exceptionDescribe'
            }, {
                title: '所属表',
                dataIndex: 'relatedTable',
                key: 'relatedTable'
            }
        ];

        const data = [
            {
                fieldName:'CSRQ',
                ChineseName:"出生日期",
                type:'C',
                length:20,
                exceptionDescribe:this.select[0],
                relatedTable:"LY_RSGL_XT"
            },
            {
                fieldName:'XM',
                ChineseName:"姓名",
                type:'C',
                length:20,
                exceptionDescribe:this.select[0],
                relatedTable:"LY_RSGL_XT"
            },
            {
                fieldName:'XBM',
                ChineseName:"性别码",
                type:'C',
                length:20,
                exceptionDescribe:this.select[0],
                relatedTable:"LY_RSGL_XT"
            },
            {
                fieldName:'XZ',
                ChineseName:"学制",
                type:'C',
                length:20,
                exceptionDescribe:this.select[1],
                relatedTable:"LY_RSGL_XT"
            },
            {
                fieldName:'XJZT',
                ChineseName:"学籍状态",
                type:'N',
                length:3,
                exceptionDescribe:this.select[0],
                relatedTable:"LY_RSGL_XT"
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
                <h4 style={{ padding: '20px 0 10px', color: 'RGB(3,169,245)', fontSize: '20px' }}><Icon type="appstore-o" />字段完整性</h4>
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



export default FieldComplete