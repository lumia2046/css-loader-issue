import { Table, Button } from 'antd';
import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import css from '../CSS/BusinessDb.css'
import json from './../Json/test.json'
import ParseTableHead from './ParseTableHead'

class TableStructure extends React.Component {

  state = {
    selectedTags: []
  };

  testaaa = (testFiled) => {
    alert(testFiled);
  }

  myRender = (text, record, index) => {
    if (record.tableType != 'BSType') {
      return <a onClick={this.testaaa.bind(this, record.tableDescription)}>{record.tableName}</a>
    }
    else {
      return <font>{record.tableName}</font>
    }
  }


  render() {
    let columns = ParseTableHead(json, this.testaaa, this.myRender)
    

    // const columns = [{
    //   title: '表名',
    //   dataIndex: 'tableName',
    //   key: 'tableName',
    //   width: '20%',
    //   render: (text, record, index) => {
    //     if (record.tableType != 'BSType') {
    //       return <a href="#">{record.tableName}</a>
    //     }
    //     else {
    //       return <font>{record.tableName}</font>
    //     }
    //   },
    // }, {
    //   title: '表描述',
    //   dataIndex: 'tableDescription',
    //   key: 'tableDescription',
    //   width: '20%',
    // }, {
    //   title: '表字段数',
    //   dataIndex: 'tableFidldNums',
    //   key: 'tableFidldNums',
    //   width: '15%',
    // }, {
    //   // title: <a onClick={testButton.bind(this, '111')}>表记录数（条）</a>,
    //   title: '表记录数（条）',
    //   dataIndex: 'tableCount',
    //   key: 'tableCount',
    //   width: '15%',
    //   // render: (text, record, index) => {
    //   //   return <Button onClick={this.testButton.bind(this, record.tableCount)}>{record.tableCount}</Button>
    //   // }
    // }, {
    //   title: '所占空间（MB）',
    //   dataIndex: 'tableSpace',
    //   key: 'tableSpace',
    //   width: '15%',
    // },
    //   //  {
    //   //   title: '详细查询',
    //   //   dataIndex: 'age',
    //   //   key: 'age',
    //   //   width: '15%',
    //   //   render: (text, record, index) => {
    //   //     // debugger;
    //   //     // alert(index);

    //   //     if (record.tableType != 'BSType') {
    //   //       return <Link to={`/businessDb/TableDataSearch`} onClick={() => { }} style={{ color: '#000000' }}><Button type="primary" >数据查询</Button></Link>
    //   //       // return <Button type="primary" >数据查询</Button>
    //   //     }
    //   //   },
    //   // }
    // ];



    const data = [{
      key: 1,
      tableType: 'BSType',
      tableName: "John Brown sr",
      children: [{
        key: 11,
        tableName: 'John Brown',
        tableDescription: 'New York No. 2 Lake Park',
        tableFidldNums: 42,
        tableCount: 60,
        tableSpace: 20,
      }, {
        key: 12,
        tableName: 'John Brown jr.',
        tableDescription: 'New York No. 3 Lake Park',
        tableFidldNums: 30,
        tableCount: 60,
        tableSpace: 30,
        children: [{
          key: 121,
          tableName: 'Jimmy Brown',
          tableDescription: 'New York No. 3 Lake Park',
          tableFidldNums: 16,
          tableCount: 60,
          tableSpace: 40,
        }],
      }, {
        key: 13,
        tableName: 'Jim Green sr.',
        tableDescription: 'London No. 1 Lake Park',
        tableFidldNums: 72,
        tableCount: 60,
        tableSpace: 50,
        children: [{
          key: 131,
          tableName: 'Jim Green',
          tableDescription: 'London No. 2 Lake Park',
          tableFidldNums: 42,
          tableCount: 60,
          tableSpace: 60,
          children: [{
            key: 1311,
            tableName: 'Jim Green jr.',
            tableDescription: 'London No. 3 Lake Park',
            tableFidldNums: 25,
            tableCount: 60,
            tableSpace: 70,
          }, {
            key: 1312,
            tableName: 'Jimmy Green sr.',
            tableDescription: 'London No. 4 Lake Park',
            tableFidldNums: 18,
            tableCount: 60,
            tableSpace: 80,
          }],
        }],
      }],
    }, {
      key: 2,
      tableName: 'Joe Black',
      tableDescription: 'Sidney No. 1 Lake Park',
      tableFidldNums: 32,
      tableCount: 60,
      tableSpace: 90,
    }];

    // rowSelection objects indicates the need for row selection
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
    };

    return (
      <div style={{ height: 500, overflow: 'auto' }}>
        <Table columns={columns} dataSource={data} />  {/* rowSelection={rowSelection}  checkBox */}
      </div>
    );
  }
}

export default TableStructure;