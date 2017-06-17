import React,{Component} from 'react'
import { Row,Col,Button,Icon,Input,Select } from 'antd'
import CommonTable from '../../common/CommonTable/CommonTable'
import tableData from './tableData.json'
import chosenTableData from './chosenTableData.json'

const Option = Select.Option

class AddInInterfaceConfigSecond extends React.Component {
 
  constructor(){
    super()
    this.state={
      mockData: [],
      targetData: [],
    }
  }

  rowSelectionData = (selectData) => {
    this.setState({
      selectData: selectData
    })
  }

  componentWillMount() {
    this.setState({
      mockData:tableData.data,
      targetData:chosenTableData.data
    })
  }

  handleChange = () => {
    const data = this.state.selectData.selectedRows

    data.map ((obj) => {
      if(obj.sqbj=='0') {
 
        let index
        for(let i=0;i<this.state.mockData.length;i++) {

          if(this.state.mockData[i].key==obj.key) {

            index=i
            break
          }
        }
        // debugger;

        let newTarget = this.state.targetData.concat(obj)

      
        let newMock = this.state.mockData.filter((data,i)=>{
          return i!=index
        })
 
        this.setState({
          targetData: newTarget,
          mockData: newMock
        })
      } else {
        let index
        for(let i=0;i<this.state.targetData.length;i++) {

          if(this.state.targetData[i].key==obj.key) {

            index=i
            break
          }
        }

        let newMock = this.state.mockData.concat(obj)

        let newTarget = this.state.targetData.filter((data,i)=>{
          return i!=index
        })
        
        this.setState({
          targetData: newTarget,
          mockData: newMock
        })
      }
    })
    
  }

  render() {
    const { mockData, targetData} = this.state
    const columns = [{
        title: '数据表名',
        dataIndex: 'sjbm',
        key: 'sjbm'
      }, {
        title: '中文简称',
        dataIndex: 'zwjc',
        key: 'zwjc',
      }]

    const columns2 = [{
        title: '数据源',
        dataIndex: 'sjy',
        key: 'sjy'
      },{
        title: '数据表名',
        dataIndex: 'sjbm',
        key: 'sjbm'
      }, {
        title: '中文简称',
        dataIndex: 'zwjc',
        key: 'zwjc',
      },{
        key: 'action',
        render: (text, record, index) => (
          <div>
            <Button type="primary" ghost onClick={()=>{console.log(text, record, index)}}>delete</Button>
          </div>
        ),
      }]

    // 选择列表数据
    const {commonTable,dispatch,menuState} = this.props
    const url = 'http://www.xxx.com?xs'
    const pageSize = 10

    const rowSelection = true
    const pagination = mockData?{total:mockData.length,current:1,pageSize:pageSize}:{}
    const tableData = mockData?{columns,data:mockData,pagination,pageSize,url,rowSelection}:{columns,pageSize,url}

    // 已选列表数据
    let tableData2 = targetData?{columns:columns2,data:targetData,pagination,pageSize,url,rowSelection}:
      {columns,pageSize,url}

    return (
      <div>
        <Row gutter={16}>
          <Col className="gutter-row" span={11}>
            <div>
              <p>选择列表:</p>
            </div>
            <div className="gutter-box">
              <div style={{fontSize:"14px",height:'30px',lineHeight:'30px'}}>
                <div style={{float:'left'}}>数据源: 
                  <Select placeholder="请选择" style={{width:'220px'}} >
                    <Option value="发布">发布</Option>
                    <Option value="注册">注册</Option>
                  </Select>  
                </div>
              </div>
              <div style={{fontSize:"14px",height:'30px',lineHeight:'30px'}}>
                <div style={{float:'left'}}>数据表: <Input size="default"  style={{width:'100px'}} /> </div>
                <div style={{float:'left'}}>中文简称: <Input size="default"  style={{width:'100px'}} /> </div>
                <div style={{float:'left',marginLeft:'20px'}}>
                  <Button type="primary">搜索</Button>
                </div>
              </div>
              <CommonTable {...({tableData,commonTable,dispatch})}  rowSelection={this.rowSelectionData}/>
            </div>
          </Col>
          <Col className="gutter-row" span={2}>
            <div className="gutter-box" style={{textAlign:'center'}}>
                <Button type="primary" onClick={this.handleChange}>
                  <Icon type="right" />
                </Button>
            </div>
          </Col>
          <Col className="gutter-row" span={11}>
            <div>
              <p>已选列表:</p>
            </div>
            <div className="gutter-box">
              <CommonTable {...({commonTable,dispatch})} tableData={tableData2} rowSelection={this.rowSelectionData}/>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AddInInterfaceConfigSecond
