import { Table, Button } from 'antd';
import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import css from '../CSS/BusinessDb.css'

// 组件库
import CommonTable from '../../../components/common/CommonTable/CommonTable'

class TableStructure extends React.Component {

  state = {
    selectedTags: []
  };

  render() {
    const { dispatch, menuState, hashUrl, commonTable } = this.props;

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
      <div style={{ height: 500, overflow: 'auto' }}>
        <CommonTable {...({ tableData, commonTable, dispatch }) } />
      </div>
    );
  }
}

export default TableStructure;