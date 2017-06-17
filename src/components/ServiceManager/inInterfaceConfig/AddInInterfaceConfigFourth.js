import React,{Component} from 'react'
import { Row,Col,Button,Icon,Input,Select } from 'antd'
import CommonTable from '../../common/CommonTable/CommonTable'
import tableData from './tableData.json'
import chosenTableData from './chosenTableData.json'

const Option = Select.Option

class AddInInterfaceConfigFourth extends React.Component {
 
  constructor(){
    super()
    this.state={

    }
  }

  rowSelectionData = (selectData) => {
    this.setState({
      selectData: selectData
    })
  }

  render() {
    const columns = [{
        title: '表名',
        dataIndex: 'bm',
        key: 'bm'
      }, {
        title: '字段名',
        dataIndex: 'zdm',
        key: 'zdm',
      }, {
        title: '字段简称',
        dataIndex: 'zdjc',
        key: 'zdjc',
      }, {
        title: '字段别名',
        dataIndex: 'zdbm',
        key: 'zdbm',
      }, {
        title: '是否主键',
        dataIndex: 'sfzj',
        key: 'sfzj',
      }, {
        title: '是否显示',
        dataIndex: 'sfxs',
        key: 'sfxs',
      }, {
        title: '查询条件',
        dataIndex: 'cxtj',
        key: 'cxtj',
      }, {
        title: '查询关系',
        dataIndex: 'cxgx',
        key: 'cxgx',
      }, {
        title: '逻辑关系',
        dataIndex: 'ljgx',
        key: 'ljgx',
      }]

    // 选择列表数据
    const {commonTable,dispatch,menuState} = this.props
    const url = 'http://www.xxx.com?xs'
    const pageSize = 10

    const data = []

    const rowSelection = false
    const pagination = data?{total:data.length,current:1,pageSize:pageSize}:{}
    const tableData = data?{columns,data,pagination,pageSize,url,rowSelection}:{columns,pageSize,url}

    return (
      <div>
        <CommonTable {...({tableData,commonTable,dispatch})}  rowSelection={this.rowSelectionData}/> 
      </div>
    )
  }
}

export default AddInInterfaceConfigFourth
