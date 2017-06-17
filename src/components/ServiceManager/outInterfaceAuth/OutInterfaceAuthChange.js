import React,{Component} from 'react'
import { Modal,Button,Row,Col,Icon } from 'antd';
import CommonTable from '../../common/CommonTable/CommonTable'
import systemData from './systemData.json'
import systemDataChosen from './systemDataChosen.json'

export default class OutInterfaceAuthChange extends React.Component {
 
  constructor(){
    super()
    this.state = {
      loading: false,
      visible: false,
      mockData: [],
      targetData: [],
    }
  }
  
  rowSelectionData = (selectData) => {
    this.setState({
      selectData: selectData
    })
  }

  handleOk = () => {
    this.setState({ loading: true, visible: false })
    if(this.props.setChangeDialogState) {
      this.props.setChangeDialogState()
    }
    setTimeout(() => {
      this.setState({ loading: false, visible: false })
    }, 3000)
  }
  handleCancel = () => {
    this.setState({ visible: false });
    if(this.props.setChangeDialogState){
      this.props.setChangeDialogState()
    }
  }

  componentWillReceiveProps(newProps) {
    let oldData = this.props.showChangeDialog
    let newData = newProps.showChangeDialog
    console.log('---------newProps-----------------')
    console.log(newProps)
    if (oldData!=null &&　(oldData != newData)) {
      this.setState({ visible: newData })
    }
    this.setState({
      mockData:systemData.data,
      targetData:systemDataChosen.data
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
    const { visible, loading, mockData, targetData} = this.state
    let targetKeys = this.state
    const interfaceChangeData = this.props.interfaceChangeData
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
    }]
    
    
    // 未授权应用数据
    const {commonTable,dispatch,menuState} = this.props
    const url = 'http://www.xxx.com?xs'
    const pageSize = 10

    const rowSelection = true
    const pagination = mockData?{total:mockData.length,current:1,pageSize:pageSize}:{}
    const tableData = mockData?{columns,data:mockData,pagination,pageSize,url,rowSelection}:{columns,pageSize,url}

    // 已授权应用数据
    let tableData2 = targetData?{columns,data:targetData,pagination,pageSize,url,rowSelection}:{columns,pageSize,url}
    //tableData2.data = data2

    return (
      <div>
        <Modal
          visible={visible}
          title="授权修改"
          width='1000'
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" size="large" onClick={this.handleCancel}>关闭</Button>,
            <Button key="submit" type="primary" size="large" loading={loading} onClick={this.handleOk}>
              确定
            </Button>
          ]}
        >
          <Row gutter={16}>
            <Col className="gutter-row" span={11}>
              <div>
                <p>未授权应用:</p>
              </div>
              <div className="gutter-box">
                <CommonTable {...({tableData,commonTable,dispatch})}  rowSelection={this.rowSelectionData}/>
              </div>
            </Col>
            <Col className="gutter-row" span={2}>
              <div className="gutter-box" style={{textAlign:'center'}}>
                  <Button type="primary" onClick={this.handleChange}>
                    <Icon type="right" />
                  </Button>
                  <br/>
                  <br/>
                  <br/>
                  <Button type="primary" onClick={this.handleChange}>
                    <Icon type="left" />
                  </Button>
              </div>
            </Col>
            <Col className="gutter-row" span={11}>
              <div>
                <p>已授权应用:</p>
              </div>
              <div className="gutter-box">
                <CommonTable {...({commonTable,dispatch})} tableData={tableData2} rowSelection={this.rowSelectionData}/>
              </div>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}
