import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from 'react';
import Styles from './OutInterfaceManagerTab.css'

class NormalLoginForm  extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  
  render() {
      const FormItem = Form.Item;
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 9 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 9 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };


    return (
      <Form onSubmit={this.handleSubmit} className="login-form"  >
        <FormItem label='接口名称' {...formItemLayout} style={{left: '5px',width: '650px',top: '45px'}}>
          {getFieldDecorator('jkmc', {
            rules: [{ required: true, message: '请输入接口名称' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem label='接口标签'  {...formItemLayout} style={{left: '5px',width: '650px',top: '45px'}}>
          {getFieldDecorator('jkbq', {
            rules: [{ required: true, message: '请输入接口标签' }],
          })(
            <Input   />
          )}
        </FormItem>
        <FormItem label='接口描述' {...formItemLayout} style={{left: '-318px',width: '1511px',top: '45px',height:'280px'}}>
            {getFieldDecorator('jkms', {
            rules: [{ required: true, message: '请输入接口描述' }],
          })(
            <Input  type='textarea' style={{height:'280px'}} />
          )}
        </FormItem>
       
      </Form>
    );
  }
}

const AddOIDialogContent1 = Form.create()(NormalLoginForm);

export default AddOIDialogContent1;