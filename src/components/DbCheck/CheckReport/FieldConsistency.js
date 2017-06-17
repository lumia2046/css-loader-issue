import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Select, Breadcrumb, Icon, Footer, Button, Input, Row, Col, Tree, Pagination } from 'antd'
import CommonTable from '../../common/CommonTable/CommonTable'
import app from '../images/app.png'
import styles from './styles.css'
import ReactEcharts from 'echarts-for-react'

const Option = Select.Option;

class FieldConsistency extends Component {
    constructor() {
        super()
        this.state={
            name:''
        }
    }

    select = ['物理库字段长度与标准不符', '物理库字段类型与标准不符', '物理库字段是否为空与标准不符']

    handleChange = (value) => {
        console.log(value);  // { key: "lucy", label: "Lucy (101)" }
    }
    inputChange = (e) => {
        this.setState({ name: e.target.value });
        console.log(e.target.value)
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
                title: '是否为空',
                dataIndex: 'isNull',
                key: 'isNull'
            }, {
                title: '是否主键',
                dataIndex: 'isPrimaryKey',
                key: 'isPrimaryKey'
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
                key: 1,
                fieldName: 'CSRQ',
                ChineseName: "出生日期",
                type: 'C',
                length: 20,
                isNull: '否',
                isPrimaryKey: '否',
                exceptionDescribe: this.select[0],
                relatedTable: "LY_RSGL_XT",
                children: [{
                    key: 12,
                    fieldName: 'CSRQ',
                    ChineseName: "出生日期",
                    type: 'C',
                    length: 20,
                    isNull: '否',
                    isPrimaryKey: '否',
                    exceptionDescribe: '标准'

                }, {
                    key: 13,
                    fieldName: 'CSRQ',
                    ChineseName: "出生日期",
                    type: 'C',
                    length: <span style={{ color: 'red' }}>30</span>,
                    isNull: '否',
                    isPrimaryKey: '否',
                    exceptionDescribe: '物理库'
                }],
            },
            {
                key: 2,
                fieldName: 'XM',
                ChineseName: "姓名",
                type: 'C',
                length: 20,
                isNull: '否',
                isPrimaryKey: '否',
                exceptionDescribe: this.select[0],
                relatedTable: "LY_RSGL_XT"
            },
            {
                key: 3,
                fieldName: 'XBM',
                ChineseName: "性别码",
                type: 'C',
                length: 20,
                isNull: '否',
                isPrimaryKey: '否',
                exceptionDescribe: this.select[0],
                relatedTable: "LY_RSGL_XT"
            },
            {
                key: 4,
                fieldName: 'XZ',
                ChineseName: "学制",
                type: 'C',
                length: 20,
                isNull: '否',
                isPrimaryKey: '否',
                exceptionDescribe: this.select[1],
                relatedTable: "LY_RSGL_XT"
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

            <div >
                <h4 style={{ padding: '20px 0 10px', color: 'RGB(3,169,245)', fontSize: '20px' }}><Icon type="appstore-o" />字段一致性</h4>
                <p style={{ padding: '20px 0' }}>
                    类型：
                    <Select labelInValue defaultValue={{ key: '1' }} onChange={this.handleChange}>
                        <Option value="1">{this.select[0]}</Option>
                        <Option value="2">{this.select[1]}</Option>
                    </Select>
                    <span style={{padding:"0 5px 0 10px"}}>字段名称：</span><Input placeholder="" style={{ display: "inline-block", width: 100 }} onChange={this.inputChange}/>
                    <span style={{padding:"0 5px 0 10px"}}>中文简称：</span><Input placeholder="" style={{ display: "inline-block", width: 100 }} />
                    <span style={{padding:"0 5px 0 10px"}}>所属表：</span><Input placeholder="" style={{ display: "inline-block", width: 100 }} />
                </p>
                <div style={{}}>
                    <CommonTable {...({ tableData }) } />
                </div>
            </div >
        )
    }
}



export default FieldConsistency