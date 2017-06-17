import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Tree,Row,Col,Input,Button } from 'antd'
import CommonTable from '../../common/CommonTable/CommonTable'
import app from '../images/app.png'
import outInterfaceAuthData from './outInterfaceAuth.json'
import OutInterfaceAuthChange from './OutInterfaceAuthChange'

const TreeNode = Tree.TreeNode

export default class OutInterfaceAuthTab extends Component{

  constructor() {
    super()
    this.state={
      showChangeDialog:false,
      interfaceChangeData:{},
    }
  }

  //设置弹出框状态
  setChangeDialogState=()=>{
    this.setState({
      showChangeDialog: false,
    });
  }

  toShowChangeDialog(record) {
    this.setState({
      showChangeDialog: true,
    })
    let changeData = {}
    changeData.jkbq = record.jkbq
    changeData.jkfl = record.jkfl
    changeData.jkmc = record.jkmc
    changeData.sqyys = record.sqyys
    this.state.interfaceChangeData = changeData
  }

  render() {
    const {commonTable,dispatch,menuState} = this.props
    const url = 'http://www.xxx.com?xs'
    const pageSize = 10

    const columns = [{
        title: '接口名称',
        dataIndex: 'jkmc',
        key: 'jkmc'
      }, {
        title: '接口标签',
        dataIndex: 'jkbq',
        key: 'jkbq',
      }, {
        title: '接口分类',
        dataIndex: 'jkfl',
        key: 'jkfl',
      },{
        title: '授权应用数',
        dataIndex: 'sqyys',
        key: 'sqyys',
      },{
        title: '操作',
        key: 'action',
        render: (text, record, index) => (
          <div>
            <Button type="primary" ghost onClick={()=>{this.toShowChangeDialog(text)}}>授权修改</Button>
          </div>
        ),
      }]

    const data = outInterfaceAuthData.data

    const rowSelection = false
    const pagination = data?{total:data.length,current:1,pageSize:pageSize}:{}
    const tableData = data?{columns,data,pagination,pageSize,url,rowSelection}:{columns,pageSize,url}

    return (
      <div>
        <div style={{background:"#E5E5E5",height:'43px',lineHeight:'43px',paddingLeft:'20px'}}>
          <img src={app}/>
          <span style={{fontSize:'16px',background:"#E5E5E5",color:"#03a9f5",marginLeft:'10px'}}>接口授权</span>
        </div>

        <Row type="flex">
          <Col span={4}>
            <div>
              <Tree
                showLine
                defaultExpandedKeys={['0-0-0']}
                onSelect={this.onSelect}
              >
                <TreeNode title="接口分类" key="0-0">
                  <TreeNode title="学工业务" key="0-0-0" />
                  <TreeNode title="教务业务" key="0-0-1" />
                  <TreeNode title="财务业务" key="0-0-2" />
                </TreeNode>
              </Tree>
            </div>
          </Col>
          <Col span={20}>
            <div style={{padding:'0px 40px'}}>
              <div style={{fontSize:"14px",height:'76px',lineHeight:'76px'}}>
                <div style={{float:'left'}}>接口名称: <Input size="default"  style={{width:'150px'}} /> </div>
                <div style={{float:'left',marginLeft:'40px'}}>
                  <Button type="primary" icon="search" >查询</Button>
                  <Button type="Default" icon="reload" style={{marginLeft:'10px'}}>重置</Button>
                </div>
              </div>
              <CommonTable {...({tableData,commonTable,dispatch})}/>
              <OutInterfaceAuthChange showChangeDialog={this.state.showChangeDialog} 
                setChangeDialogState={this.setChangeDialogState}
                interfaceChangeData={this.interfaceChangeData}/>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}


