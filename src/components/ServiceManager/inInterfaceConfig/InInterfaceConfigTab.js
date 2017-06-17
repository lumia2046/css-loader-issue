import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Tree,Row,Col,Input,Button,Select } from 'antd'
import app from '../images/app.png'
import CommonTable from '../../common/CommonTable/CommonTable'
import InInterfaceConfig from './inInterfaceConfig.json'
import AddInInterfaceConfig from './AddInInterfaceConfig'

const TreeNode = Tree.TreeNode
const Option = Select.Option

export default class InInterfaceConfigTab extends Component{

  constructor(){
    super()
    this.state={
      showAddDialog:false,
    }
  }

  rowSelectionData = (selectData) => {
    this.setState({
      selectData: selectData
    })
  }

  //设置增加弹出框状态
  setAddDialogState=()=>{
    this.setState({
      showAddDialog: false,
    });
  }

  render(){

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
        title: '接口描述',
        dataIndex: 'jkms',
        key: 'jkms',
      },{
        title: '接口状态',
        dataIndex: 'jkzt',
        key: 'jkzt',
      },{
        title: '操作',
        key: 'action',
        render: (text, record, index) => (
          <div>
            <Button type="primary" ghost onClick={()=>{console.log(text, record, index)}}>发布</Button>
            <Button style={{marginLeft:'10px'}} type="primary" ghost onClick={()=>{console.log(text, record, index)}}>停止</Button>
          </div>
          
        ),
      }]

    const data = InInterfaceConfig.data

    const rowSelection = true
    const pagination = data?{total:data.length,current:1,pageSize:pageSize}:{}
    const tableData = data?{columns,data,pagination,pageSize,url,rowSelection}:{columns,pageSize,url}

    return (
      <div>
        <div style={{background:"#E5E5E5",height:'43px',lineHeight:'43px',paddingLeft:'20px'}}>
          <img src={app}/>
          <span style={{fontSize:'16px',background:"#E5E5E5",color:"#03a9f5",marginLeft:'10px'}}>接口配置</span>
        </div>

        <Row type="flex">
          <Col span={3}>
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
          <Col span={21}>
            <div style={{padding:'0px 40px'}}>
              <div style={{fontSize:"14px",height:'76px',lineHeight:'76px'}}>
                <div style={{float:'left'}}>接口名称: <Input size="default"  style={{width:'100px'}} /> </div>
                <div style={{float:'left'}}>接口状态: 
                  <Select placeholder="请选择" style={{width:'80px'}} >
                    <Option value="发布">发布</Option>
                    <Option value="注册">注册</Option>
                  </Select>  
                </div>
                <div style={{float:'left',marginLeft:'40px'}}>
                  <Button type="primary">查询</Button>
                  <Button type="Default" style={{marginLeft:'10px'}}>重置</Button>
                </div>
                <div style={{float:"right"}}>
                  <Button type="primary" style={{marginRight:'10px'}} onClick={() => {
                      
                    }}>授权</Button>
                  <Button type="primary" style={{marginRight:'10px'}} onClick={() => {
                      this.setState({
                        showAddDialog: true,
                      });
                    }}>新增</Button>
                  <Button type="warning" style={{marginRight:'10px'}} 
                    onClick={{}}
                    >修改</Button>
                  <Button type="danger" style={{marginRight:'10px'}} onClick={()=>{}} >删除</Button>
                  <Button type="primary" style={{}} onClick={() => {}}>导入</Button>
                </div>
              </div>
              <CommonTable {...({tableData,commonTable,dispatch})}  rowSelection={this.rowSelectionData}/>
              <AddInInterfaceConfig showAddDialog={this.state.showAddDialog} setAddDialogState={this.setAddDialogState}/>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}