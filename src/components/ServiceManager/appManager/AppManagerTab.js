import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon ,Footer ,Button ,Input,Row, Col,Tree,Pagination, Modal } from 'antd'
import CommonTable from '../../common/CommonTable/CommonTable'
import app from '../images/app.png'
import AddApplication from './AddApplication'
import EditApplication from './EditApplication'
import appManagerData from './appManagerData.json'

export default class AppManagerTab extends Component{
  constructor(){
    super()
    this.state= {
      showAddDialog:false,
      showEditDialog:false,
      showEditWarning:false,
      selectData:{},
      editData:{}
    }
  }

  //设置增加弹出框状态
  setAddDialogState=()=>{
    this.setState({
      showAddDialog: false,
    });
  }
  
  //设置编辑弹出框状态
  setEditDialogState=()=>{
    this.setState({
      showEditDialog: false,
    });
  }

  // 获取编缉对话相关信息
  toShowEditDialog =()=> {
    const selectedRowKeys = this.state.selectData.selectedRowKeys
    if(selectedRowKeys!=null && selectedRowKeys.length ==1) {
      this.setState({
        showEditDialog: true,
      })
      const data = this.state.selectData.selectedRows
      let editData = {}
      data.map ((obj) => {
        editData.xtmc = obj.xtmc
        editData.xturl = obj.xturl
        editData.xtip = obj.xtip
        editData.glyyx = obj.glyyx
        return editData
      })
      this.state.editData = editData
    }
  }

  warning=()=> {
    Modal.warning({
      title: '选择提示',
      content: '选择一条数据修改!',
    })
  }

  rowSelectionData = (selectData) => {
    this.setState({
      selectData: selectData
    })
  }

	render(){

	  const {commonTable,dispatch,menuState} = this.props
	  const url = 'http://www.xxx.com?xs'

	  const pageSize = 10

	//表格数据
	//const {commonTable,dispatch,menuState} = this.props; const url = 'http://www.xxx.com?xconst pageSize = 2'

	  const columns = [{
        title: '系统名称',
        dataIndex: 'xtmc',
        key: 'xtmc'
      }, {
        title: '系统URL',
        dataIndex: 'xturl',
        key: 'xturl',
      }, {
        title: '系统IP',
        dataIndex: 'xtip',
        key: 'xtip',
      },{
        title: '管理员邮箱',
        dataIndex: 'glyyx',
        key: 'glyyx',
      },{
        title: '创建时间',
        dataIndex: 'cjsj',
        key: 'cjsj',
      },{
        title: '认证码操作',
        key: 'action',
        render: (text, record, index) => (
          <div>
            <Button type="primary" ghost onClick={()=>{console.log(text, record, index)}}>发送认证码</Button>
            <Button style={{marginLeft:'10px'}} type="primary" ghost onClick={()=>{console.log(text, record, index)}}>认证码重置</Button>
          </div>
          
        ),
      }]

    const data = appManagerData.data

    const rowSelection = true
    const pagination = data?{total:data.length,current:1,pageSize:pageSize}:{}
    const tableData = data?{columns,data,pagination,pageSize,url,rowSelection}:{columns,pageSize,url}

		return(
      <div>
        <div style={{background:"#E5E5E5",height:'43px',lineHeight:'43px',paddingLeft:'20px'}}>
            <img src={app}/>
            <span style={{fontSize:'16px',background:"#E5E5E5",color:"#03a9f5",marginLeft:'10px'}}>应用管理</span>
        </div>
        <div style={{padding:'0px 40px'}}>
          <div style={{fontSize:"14px",height:'76px',lineHeight:'76px'}}>
            <div style={{float:'left'}}>系统名称: <Input size="default"  style={{width:'150px'}} /> </div>
            <div style={{float:'left',marginLeft:'10px'}}> 系统IP: <Input  style={{width:'150px'}}/></div>
            <div style={{float:'left',marginLeft:'40px'}}>
              <Button type="primary" icon="search" >查询</Button>
              <Button type="Default" icon="reload" style={{marginLeft:'10px'}}>重置</Button>
            </div>
            <div style={{float:"right"}}>
              <Button type="primary" style={{marginRight:'10px'}} onClick={() => {
                  this.setState({
                    showAddDialog: true,
                  });
                }}>新增</Button>
              <Button type="warning" style={{marginRight:'10px'}} 
                onClick={this.toShowEditDialog}
                >修改</Button>
              <Button type="danger"  onClick={this.warning} >删除</Button>
            </div>
          </div>
          <CommonTable {...({tableData,commonTable,dispatch})}  rowSelection={this.rowSelectionData}/>
          <AddApplication showAddDialog={this.state.showAddDialog} setAddDialogState={this.setAddDialogState}/>
          <EditApplication showEditDialog={this.state.showEditDialog}
            setEditDialogState={this.setEditDialogState}
            editData={this.state.editData} />
        </div>
		  </div>
    )
		
	}
}
