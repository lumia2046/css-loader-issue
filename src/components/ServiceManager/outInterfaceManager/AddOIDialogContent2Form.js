import React from 'react';
import { Form, Select, Input, Button } from 'antd';


class App extends React.Component {
    
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleSelectChange = (value) => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const FormItem = Form.Item;
    const Option = Select.Option;

    return (
      <Form onSubmit={this.handleSubmit}>
            <FormItem
          label="数据源"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
          style={{    width: '650px',left: '-25px',top: '25px'}}
        >
          {getFieldDecorator('dataSource', {
            onChange: this.handleSelectChange,
          })(
            <Select >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          label="数据表"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
          style={{    width: '430px',top: '15px',left: '12px'}}
        >
          {getFieldDecorator('table')(
            <Input />
          )}
        </FormItem>
      
        <FormItem 
          wrapperCol={{ span: 8, offset: 4 }}
          style={{left:'180px',top:'-42px'}}
        >
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const AddOIDialogContent2Form = Form.create()(App);
export default AddOIDialogContent2Form;