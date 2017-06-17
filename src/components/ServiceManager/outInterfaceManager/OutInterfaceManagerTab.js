import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon, Footer, Button, Input, Row, Col, Tree, Pagination, Modal } from 'antd'
import CommonTable from '../../common/CommonTable/CommonTable'
import getSize from '../../../utils/getSize'
import CommonTreeNode from '../../common/CommonTreeNode/CommonTreeNode'
import styles from './OutInterfaceManagerTab.css'
import CheckInterfaceDialog from './CheckInterfaceDialog'
import AddOIDialog from './AddOIDialog'
import treeData from './tree.json'

export default class OutInterfaceManagerTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCheckInterfaceDialog: false,
    }
  }

  setShowCheckInterfaceDialog = () => {
    this.setState({
      showCheckInterfaceDialog: false,
    })
  }
  render() {
    const { commonTable, dispatch, menuState } = this.props;
    const url = 'http://www.xxx.com?xs'
    const pageSize = 2
    const columns = [{
      title: '接口名称',
      dataIndex: 'jkmc',
      key: 'jkmc',
      render: text => <a href="#">{text}</a>,
    }, {
      title: '接口标签',
      dataIndex: 'jkbq',
      key: 'jkbq'
    }, {
      title: '接口分类',
      dataIndex: 'jkfl',
      key: 'jkfl'
    }, {
      title: '接口描述',
      dataIndex: 'jkms',
      key: 'jkms'
    }, {
      title: '接口状态',
      dataIndex: 'jkzt',
      key: 'jkzt'
    }, {
      title: '操作',
      key: 'cz',

      render: (text, record, index) => (<div >
        <Button type='default' onClick={() => this.setState({ showCheckInterfaceDialog: true })} style={{right: '10px'}} >测试</Button>
        <Button type="default" onClick={() => { console.log(text, record, index) }}  >发布</Button>
        <Button type="default" onClick={() => { console.log(text, record, index) }}   style={{left: '10px'}}>停止</Button>
      </div>)
    }];

    const data = [{
      key: '1',
      jkmc: 'John Brown',
      jkbq: 32,
      jkfl: 'New York No. 1 Lake Park',
      jkms: 'LY_DCP',
      jkzt: '123'
    }, {
      key: '2',
      jkmc: 'John Brown',
      jkbq: 32,
      jkfl: 'New York No. 1 Lake Park',
      jkms: 'LY_DCP',
      jkzt: '123'
    }, {
      key: '3',
      jkmc: 'John Brown',
      jkbq: 32,
      jkfl: 'New York No. 1 Lake Park',
      jkms: 'LY_DCP',
      jkzt: '123'
    }];

    const rowSelection = true;
    const pagination = data ? { total: data.length, current: 1, pageSize: pageSize } : {}
    const tableData = data ? { columns, data, pagination, pageSize, url, rowSelection } : { columns, pageSize, url, rowSelection }

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
    return (<div>
      <p style={{ padding: 10, fontSize: '20px', background: "#ccc", color: "RGB(3,169,243)" }}>
        <Icon type="disconnect" />
        接口管理
       </p>

      <Row style={{ height: '100%' }}>
        <Col span={3} >
          <div style={{ padding: 20, borderRight: '2px solid #ccc', height: getSize().contentH - 300 }}>
             <CommonTreeNode tree={tree} />
          </div>
        </Col>
        <Col span={20}>
          <div style={{ padding: 22 }}>
            <p style={{ float: 'left' }}> 接口名称 :  <Input size="default" placeholder="系统管理" style={{ width: '50%' }} />&nbsp;&nbsp;</p>
            <p style={{ float: 'left', marginLeft: '-35px' }}> 接口状态 :  <Input placeholder="default size" style={{ width: '50%' }} /> </p>

            <Button type="Default" style={{ left: '-30px', float: 'left' }}>查询</Button>
            <Button type="primary" style={{ left: '-20px', float: 'left' }}>重置</Button>

            <div style={{ float: 'right', marginRight: '30px' }}>


              <Button type="primary" style={{ float: 'right', marginRight: '10px' }}>删除</Button>
              <Button type="Default" style={{ float: 'right', marginRight: '10px' }}>修改</Button>
              <div style={{ float: 'right', marginRight: '10px' }} ><AddOIDialog ></AddOIDialog></div>
            </div >



            <div style={{ float: 'left', width: '100%', marginTop: '15px' }}>
              <CommonTable {...({ tableData, commonTable, dispatch }) } />
            </div>
          </div>
        </Col>
      </Row>

      <CheckInterfaceDialog showCheckInterfaceDialog={this.state.showCheckInterfaceDialog} setShowCheckInterfaceDialog={this.setShowCheckInterfaceDialog}>测试</CheckInterfaceDialog>

    </div>)


  }
}
