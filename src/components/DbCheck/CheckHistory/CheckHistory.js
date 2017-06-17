import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon, Footer, Button, Input, Row, Col, Tree, Pagination } from 'antd'
import CommonTable from '../../common/CommonTable/CommonTable'
import app from '../images/app.png'
import CheckReport from '../CheckReport/CheckReport'

class CheckHistory extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const { commonTable, dispatch, menuState ,hashUrl} = this.props;
    const columns = [
      {
        title: '校验名称',
        dataIndex: 'systemName',
        key: 'systemName'
      }, {
        title: '校验得分',
        dataIndex: 'tableName',
        key: 'tableName'
      }, {
        title: '教研系统数',
        dataIndex: 'columnNum',
        key: 'columnNum'
      }, {
        title: '校验表总数',
        dataIndex: 'tableIntegrality',
        key: 'tableIntegrality'
      }, {
        title: '教研时间',
        dataIndex: 'columnIntergrality',
        key: 'columnIntergrality'
      }, {
        title: '校验耗时（分钟）',
        dataIndex: 'columnConsistency',
        key: 'columnConsistency'
      }, {
        title: '操作',
        key: 'action',
        render: (text, record, index) => (
          <Link key={index} to={`/dbCheck/history/${text.tableName}`} onClick={() => { }}>
            <Button
              type="primary"
              onClick={() => {
                console.log(text);
              }}>查看检核报告</Button>
          </Link>
        )
      }
    ];

    const data = [
      {
        systemName: "20170417标准核验",
        tableName: "94",
        columnNum: "20",
        tableIntegrality: 267,
        columnIntergrality: "2017-05-23 12:00:03",
        columnConsistency: "7"
      }, {
        systemName: "20170417标准核验",
        tableName: "94",
        columnNum: "20",
        tableIntegrality: 267,
        columnIntergrality: "2017-05-23 12:00:03",
        columnConsistency: "7"
      }, {
        systemName: "20170417标准核验",
        tableName: "94",
        columnNum: "20",
        tableIntegrality: 267,
        columnIntergrality: "2017-05-23 12:00:03",
        columnConsistency: "7"
      }, {
        systemName: "20170417标准核验",
        tableName: "94",
        columnNum: "20",
        tableIntegrality: 267,
        columnIntergrality: "2017-05-23 12:00:03",
        columnConsistency: "7"
      }, {
        systemName: "20170417标准核验",
        tableName: "94",
        columnNum: "20",
        tableIntegrality: 267,
        columnIntergrality: "2017-05-23 12:00:03",
        columnConsistency: "7"
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
      <div style={{ background: 'white' }}>
      {hashUrl.currentUrl.indexOf('/dbCheck/history/')<0 &&
        <div>
        <div style={{ background: "#E5E5E5", height: '43px', lineHeight: '43px', paddingLeft: '20px' }}>
          <img src={app} />
          <span style={{ fontSize: '16px', background: "#E5E5E5", color: "#03a9f5", marginLeft: '10px' }}>应用管理</span>
        </div>
        <div style={{ padding: '0px 40px' }}>

          <div style={{ fontSize: "14px", height: '76px', lineHeight: '76px' }}>
            业务系统 :  <Input size="default" style={{ width: '9%', margin: '0 10px' }} />
            表名:  <Input style={{ width: '9%', margin: '0 10px' }} />
            <Button type="primary" icon="search" style={{ left: "3%" }}>查询</Button>
            <Button type="Default" icon="search" style={{ left: "3.5%" }}>重置</Button>
            <div style={{ float: "right" }}>
              <Button type="primary" style={{ marginRight: '10px' }}>更新</Button>
              <Button type="warning" style={{ marginRight: '10px' }}>修改</Button>
              <Button type="danger" style={{}}>删除</Button>
            </div>

          </div>
          <div>
            <CommonTable {...({ tableData, commonTable, dispatch }) } />
          </div>
        </div>
        </div>
      }
      {hashUrl.currentUrl.indexOf('/dbCheck/history/') >= 0 && <CheckReport />}
      </div>

    )
  }
}

function mapStateToProps(state) {
    const { hashUrl } = state
    return { hashUrl }
}

export default connect(mapStateToProps)(CheckHistory)