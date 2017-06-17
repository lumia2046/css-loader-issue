import React,{Component} from 'react'
import { Modal,Button,Form,Input,AutoComplete,Steps } from 'antd'
import AddInInterfaceConfigFirst from './AddInInterfaceConfigFirst'
import AddInInterfaceConfigSecond from './AddInInterfaceConfigSecond'
import AddInInterfaceConfigThird from './AddInInterfaceConfigThird'
import AddInInterfaceConfigFourth from './AddInInterfaceConfigFourth'

const Step = Steps.Step
const FormItem = Form.Item

class AddInInterfaceConfig extends React.Component {
 
  constructor(){
    super()
    this.state = {
    loading: false,
    visible: false,
    current: 0,
  }

  }
  
  handleOk = () => {
    this.setState({ loading: true });
    if(this.props.setAddDialogState) {
      this.props.setAddDialogState()
    }

    this.setState({ loading: false, visible: false })
  }
  handleCancel = () => {
    this.setState({ visible: false })
    if(this.props.setAddDialogState){
      this.props.setAddDialogState()
    }
  }

  componentWillReceiveProps(newProps) {

    let oldData = this.props.showAddDialog;
    let newData = newProps.showAddDialog;
    console.log(newProps)

    if (oldData!=null &&　(oldData != newData)) {
      this.setState({ visible: newData })
    }

  }

  next() {
    const current = this.state.current + 1
    this.setState({ current })
  }
  prev() {
    const current = this.state.current - 1
    this.setState({ current })
  }

  render() {

    const { visible, loading,current } = this.state
    const { getFieldDecorator } = this.props.form
    const steps = [{
        key:'1',
        title: '接口基本信息',
      }, {
        key:'2',
        title: '数据表选择',
      }, {
        key:'3',
        title: '输入数据项设置',
      }, {
        key:'4',
        title: '完成',
      }]
    return (
      <div>
        <Modal
          visible={visible}
          title="新增接口"
          width='1000'
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={
            <div className="steps-action">
              {
                this.state.current > 0
                &&
                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                  Previous
                </Button>
              }
              {
                this.state.current < steps.length - 1
                &&
                <Button type="primary" onClick={() => this.next()}>Next</Button>
              }
              {
                this.state.current === steps.length - 1
                &&
                <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
              }
            </div>
          }
        >
          <Steps current={current}>
            {steps.map(item => <Step key={item.title} title={item.title} />)}
          </Steps>
          <div className="steps-content">
            {steps[this.state.current].key=='1'&&<AddInInterfaceConfigFirst/>}
            {steps[this.state.current].key=='2'&&<AddInInterfaceConfigSecond/>}
            {steps[this.state.current].key=='3'&&<AddInInterfaceConfigThird/>}
            {steps[this.state.current].key=='4'&&<AddInInterfaceConfigFourth/>}
          </div>
        </Modal>
      </div>
    )
  }
}

const AddInInterfaceConfigData = Form.create()(AddInInterfaceConfig)

export default AddInInterfaceConfigData
