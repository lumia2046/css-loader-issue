import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon, Footer, Button, Input, Row, Col, Tree, Pagination, Modal  } from 'antd'
import CommonTable from '../../common/CommonTable/CommonTable'
import getSize from '../../../utils/getSize'
import CommonTreeNode from '../../common/CommonTreeNode/CommonTreeNode'
import treeData from './tree.json'
import app from '../images/app.png'


export default class DataViewTab extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    const { commonTable, dispatch, menuState } = this.props;
    const url = 'http://www.xxx.com?xs'
    const pageSize = 2
    const rowSelection = true;
   

	//接口分类树的参数
     const tree = { 
      data: treeData,
      checkable: true,
      onExpand: this.onExpand, 
      onCheck: this.onCheck, 
      onSelect: this.onSelect,
      expandedKeys: ["a","f"],
      autoExpandParent: true,
      checkedKeys: ["f","k"],
      selectedKeys: [],
      showLine:true,
      url:"http://abc.sss.com"
    }

	const columns = [{
      title: '学号',
      dataIndex: 'xh',
      key: 'xh',
      render: text => <a href="#">{text}</a>,
    }, {
      title: '姓名',
      dataIndex: 'xm',
      key: 'xm'
    }, {
      title: '性别',
      dataIndex: 'xb',
      key: 'xb'
    }, {
      title: '出生日期',
      dataIndex: 'csrq',
      key: 'csrq'
    }, {
      title: '民族',
      dataIndex: 'mz',
      key: 'mz'
    }, {
      title: '身份证',
      dataIndex: 'sfz',
      key: 'sfz'
    }, {
      title: '政治面貌',
      dataIndex: 'zzmm',
      key: 'zzmm'
    }];

    const data = [{
      key: 1,
      xh: '111111111111',
      xm: '老王',
      xb: '男性',
      csrq: 19990505,
	  mz: '藏族',
	  sfz:'440111111111111111',
      zzmm: '中华人民共和国少先队',
    }, {
      key: 2,
      xh: '111111111111',
      xm: '老七',
      xb: '男性',
      csrq: 19990505,
	  mz: '藏族',
	  sfz:'440111111111111111',
      zzmm: '中华人民共和国少先队',
    }, {
      key: 3,
      xh: '111111111111',
      xm: '老四',
      xb: '男性',
      csrq: 19990505,
	  mz: '藏族',
	  sfz:'440111111111111111',
      zzmm: '中华人民共和国少先队',
    }];

	const pagination = data ? { total: data.length, current: 1, pageSize: pageSize } : {}
    const tableData = data ? { columns, data, pagination, pageSize, url, rowSelection } : { columns, pageSize, url, rowSelection }

    return (<div>
      
	   <div style={{background:"#E5E5E5",height:'43px',lineHeight:'43px',paddingLeft:'20px'}}>
            <img src={app}/>
            <span style={{fontSize:'16px',background:"#E5E5E5",color:"#03a9f5",marginLeft:'10px'}}>数据查看</span>
        </div>

      <Row style={{ height: '100%' }}>
        <Col span={3} >
          <div style={{ padding: 20, borderRight: '2px solid #ccc', height: getSize().contentH - 300 }}>
             <CommonTreeNode tree={tree} />
          </div>
        </Col>
        <Col span={20}>
          <div style={{ padding: 22 }}>
            <p style={{ float: 'left' }}> 学号 :  <Input size="default" placeholder="学号" style={{ width: '50%' }} />&nbsp;&nbsp;</p>
            <p style={{ float: 'left', marginLeft: '-35px' }}> 姓名 :<Input size="default" placeholder="姓名" style={{ width: '50%' }} /></p>
            <Button type="Default" style={{ left: '30px', float: 'left' }}>查询</Button>
            <Button type="primary" style={{ left: '20px', float: 'left' }}>重置</Button>
            <div style={{ float: 'right', marginRight: '30px' }}>
              <Button type="default" style={{ float: 'right', marginRight: '10px' ,backgroundColor:'rgb(53,208,226)',color:'white'}} >导出</Button>
            </div >
            <div style={{ float: 'left', width: '100%', marginTop: '15px' }}>
              <CommonTable {...({ tableData, commonTable, dispatch }) } />
            </div>
          </div>
        </Col>
      </Row>
    </div>)
  }
}