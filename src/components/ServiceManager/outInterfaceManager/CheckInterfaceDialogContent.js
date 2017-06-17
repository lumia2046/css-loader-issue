import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React, { Component } from 'react';
const FormItem = Form.Item;
import Styles  from './OutInterfaceManagerTab.css'

class CheckInterfaceDialog extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 9 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
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
      <Form onSubmit={this.handleSubmit} >
        <FormItem  {...formItemLayout} label="学生ID:">
          {getFieldDecorator('xsId', {
            rules: [{ required: true, message: '请输入学生ID' }],
          })(
            <Input />
            )}
        </FormItem>
        <FormItem {...formItemLayout} label="年级:">
          {getFieldDecorator('nj', {
            rules: [{ required: true, message: '请输入学生年级' }],
          })(
            <Input />
            )}
        </FormItem>

        <FormItem {...formItemLayout} label="班级:">
          {getFieldDecorator('bj', {
            rules: [{ required: true, message: '请输入学生班级' }],
          })(
            <Input />
            )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="测试"  className={Styles.checkbuttom_style}  >
            测试
        </Button>
        </FormItem>
      </Form>
    );
  }
}




const CheckInterfaceDialogContent = Form.create()(CheckInterfaceDialog);

export default CheckInterfaceDialogContent;