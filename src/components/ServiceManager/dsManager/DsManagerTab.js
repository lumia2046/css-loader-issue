import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon ,Footer ,Button ,Input,Row, Col,Tree,Pagination  } from 'antd'
import CommonTable from '../../common/CommonTable/CommonTable'
import app from '../images/app.png'
import columnsData from './columns.json'
import dsManagerData from './dsManagerData.json'
import AddDsManager from './AddDsManager'
import EditDsManager from './EditDsManager'


export default class DsManagerTab extends Component{

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

	rowSelectionData = (selectData) => {
    this.setState({
      selectData: selectData,
    })
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
      const editData = {}
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

	render(){
	  const {commonTable,dispatch} = this.props;
	  const url = 'http://www.xxx.com?xs'
	  const pageSize = 3
		
		// 表格列数据
		const columns = columnsData.data
		// 表格数据
    const data = dsManagerData.data

		const rowSelection = true;
    const pagination = data?{total:data.length,current:1,pageSize:pageSize}:{}
    const tableData = data?{columns,data,pagination,pageSize,url,rowSelection}:{columns,pageSize,url}

		return  (
			<div>
				<div style={{background:"#E5E5E5",height:'43px',lineHeight:'43px',paddingLeft:'20px'}}>
					<img src={app}/>
					<span style={{fontSize:'16px',background:"#E5E5E5",color:"#03a9f5",marginLeft:'10px'}}>数据源管理</span>
				</div>

				<div style={{padding:'10px 40px'}}>
					<div style={{fontSize:"14px",height:'76px',lineHeight:'76px' }}>
						<div style={{float:'left'}}>数据源名称: <Input size="default" style={{width:'150px'}} /></div> 
						<div style={{float:'left',marginLeft:'10px'}}>数据源IP: <Input style={{width:'150px' }}/></div>
						<div style={{float:'left',marginLeft:'40px'}}>
							<Button type="primary" icon="search">查询</Button>
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
							<Button type="danger" style={{}} onClick={() => {
									
								}} >删除</Button>
						</div>
					</div>
					<CommonTable {...({tableData,commonTable,dispatch})} rowSelection={this.rowSelectionData}/>

					<AddDsManager showAddDialog={this.state.showAddDialog} setAddDialogState={this.setAddDialogState}/>
          <EditDsManager showEditDialog={this.state.showEditDialog}
            setEditDialogState={this.setEditDialogState}
            editData={this.state.editData} />

				</div>
			</div>)
		
	}
}
