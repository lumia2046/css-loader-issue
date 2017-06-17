import React,{Component} from 'react'
import { Form,Input } from 'antd'

const FormItem = Form.Item

class AddInInterfaceConfigFirst extends React.Component {
 
  constructor(){
    super()
  }

  render() {

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
        <Form>
            <FormItem
              {...formItemLayout}
              label="接口名称"
            >
              {getFieldDecorator('接口名称', {
                rules: [{ required: true, message: '请输入接口名称!', whitespace: true }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="接口标签"
            >
              {getFieldDecorator('接口标签', {
                rules: [{ required: true, message: '请输入接口标签!', whitespace: true }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="接口描述"
            >
              <Input type="textarea" />
            </FormItem>
          </Form>
      </div>
    )
  }
}

const AddInInterfaceConfigFirstData = Form.create()(AddInInterfaceConfigFirst)

export default AddInInterfaceConfigFirstData
