import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// import {fetchHomePageData} from '../../actions'
import { Layout, Row, Col, Button, Card, Input } from 'antd'
import Header from '../../../components/common/Header/Header'
import getSize from '../../../utils/getSize'
import css from '../CSS/BusinessDb.css'


// 组件库
import CommonTable from '../../../components/common/CommonTable/CommonTable'
import TableStructure from './../Common/TableStructure'
import MyTag from './../Common/MyTag'

import ZTBCX_ICON from '../Image/ZTBCX_ICON.png'

const Search = Input.Search;

class BusinessDbTableSearch extends Component {
  constructor() {
    super()
    this.state = {};
  }


  render() {
    const { Content, Footer, Sider } = Layout;
    const { dispatch, menuState, hashUrl, commonTable } = this.props;
    const baseUrl = hashUrl.currentUrl.substr(0, hashUrl.currentUrl.lastIndexOf('/'))

    const dateFormat = 'YYYY/MM/DD';
    const monthFormat = 'YYYY/MM';

    const url = 'http://www.xxx.com?xs'
    const pageSize = 2
    const columns = [{
      title: '表名',
      dataIndex: 'tableName',
      key: 'tableName',
      render: text => <a href="#">{text}</a>,
    }, {
      title: '表描述',
      dataIndex: 'description',
      key: 'description',
    }, {
      title: '数据量',
      dataIndex: 'dataCount',
      key: 'dataCount',
    }, {
      title: '所属业务',
      dataIndex: 'subBusiness',
      key: 'subBusiness',
    }];

    const data = [{
      key: '1',
      tableName: 'John Brown',
      description: 'New York No. 1 Lake Park',
      dataCount: 32,
      subBusiness: '图书馆业务'
    }, {
      key: '2',
      tableName: 'Jim Green',
      description: 'London No. 1 Lake Park',
      dataCount: 42,
      subBusiness: '图书馆业务'
    }, {
      key: '3',
      tableName: 'Joe Black',
      description: 'Sidney No. 1 Lake Park',
      dataCount: 32,
      subBusiness: '图书馆业务'
    }];

    // 第一列是否是复选框
    const rowSelection = false;
    const pagination = data ? { total: data.length, current: 1, pageSize: pageSize } : {}
    const tableData = data ? { columns, data, pagination, pageSize, url, rowSelection } : { columns, pageSize, url, rowSelection }

    return (
      <div className={css.ZTYXKQTopDiv}>
        <div>
          <p className={css.ZTYXKQButtonPLeft}>
            <Button type="dashed" style={{ backgroundColor: '#EEEEEE', marginLeft: 5, border: 0, borderRadius: 30 }} ><Link to={`/businessDb/TotalRunInfo`} onClick={() => { }}>总体运行分析情况</Link></Button>
            <Button type="primary" style={{ borderRadius: 30 }} ><Link to={`/businessDb/TableSearch`} onClick={() => { }}>全量数据库查询</Link></Button>
            <Button type="dashed" style={{ backgroundColor: '#EEEEEE', marginLeft: 5, border: 0, borderRadius: 30 }}><Link to={`/businessDb/CodeSetSearch`} onClick={() => { }}>代码集查看</Link></Button>
          </p>
        </div>
        <div style={{ paddingTop: 45 }}>
          <div className={css.echartsHead}><img src={ZTBCX_ICON} /><font>全量数据库查询</font></div>

          <div className={css.echartsBody} style={{ height: 650, backgroundColor: '#FFFFFF' }}>
            <div style={{ paddingTop: 25, paddingBottom: 25, paddingLeft: '3%', textAlign: 'left' }} >
              表名：<Input placeholder="Basic usage" style={{ width: '150px', marginRight: '10px' }} />
              <Button type="primary">查询</Button>
              <div className={css.FloatRight} style={{ paddingRight: '3%' }}>
                <MyTag />
              </div>
            </div>

            <div style={{ paddingLeft: '3%', paddingRight: '3%', textAlign: 'center' }} >
              <TableStructure />
            </div>
          </div>

          {/** 
          <div className={css.echartsBody} style={{ height: 500, backgroundColor: '#FFFFFF' }}>
            <div style={{ paddingTop: 25, paddingBottom: 25, textAlign: 'center' }} >
              <Input placeholder="Basic usage" style={{ width: '400px', marginRight: '10px' }} />
              <Button type="primary">查询</Button>
            </div>
            <div style={{ paddingLeft: '3%', paddingRight: '3%', textAlign: 'center' }} >
              <CommonTable {...({ tableData, commonTable, dispatch }) } />
            </div>
          </div>
           **/}

        </div>
      </div>
    )

  }
}

function mapStateToProps(state) {
  const { menuState, hashUrl } = state;
  return { menuState, hashUrl }
}

export default connect(mapStateToProps)(BusinessDbTableSearch)
