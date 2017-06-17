import React,{Component} from 'react'
import { Modal, Button, Form, Input, AutoComplete } from 'antd'

const FormItem = Form.Item

class AddApplication extends React.Component {
 
  constructor(){
    super()
    this.state = {
    loading: false,
    visible: false
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

    let oldData = this.props.showAddDialog
    let newData = newProps.showAddDialog
    console.log(newProps)

    if (oldData!=null &&　(oldData != newData)) {
      this.setState({ visible: newData })
    }
  }


  render() {
    const { visible, loading } = this.state
    const { getFieldDecorator } = this.props.form

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    }
    
    return (

      <div>
       
        <Modal
          visible={visible}
          title="新增系统"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="submit" type="primary" size="large" loading={loading} onClick={this.handleOk}>
              确认增加
            </Button>,
            <Button key="back" size="large" onClick={this.handleCancel}>返回</Button>,
          ]}
        >
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label="系统名称"
            >
              {getFieldDecorator('系统名称', {
                rules: [{ required: true, message: '请输入系统名称!', whitespace: true }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="系统URL"
            >
              {getFieldDecorator('系统URL', {
                rules: [{ required: true, message: '请输入系统URL!', whitespace: true }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="系统IP"
            >
              {getFieldDecorator('系统IP', {
                rules: [{ required: true, message: '请输入系统IP!', whitespace: true }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="管理员邮箱"
            >
              {getFieldDecorator('管理员邮箱', {
                rules: [{ required: true, message: '请输入管理员邮箱!', whitespace: true }],
              })(
                <Input />
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}

const AddApplicationData = Form.create()(AddApplication)

export default AddApplicationData
