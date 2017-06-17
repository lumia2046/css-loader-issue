import React,{Component} from 'react'
import { Modal, Button, Form, Input, AutoComplete,Select,Row,Col } from 'antd'

const FormItem = Form.Item

class EditDsManager extends React.Component {
 
  constructor(){
    super()
    this.state = {
    loading: false,
    visible: false
  }

  }
  
  handleOk = () => {
    this.setState({ loading: true, visible: false });
    if(this.props.setEditDialogState) {
      this.props.setEditDialogState()
    }
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }
  handleCancel = () => {
    this.setState({ visible: false });
    if(this.props.setEditDialogState){
      this.props.setEditDialogState()
    }
  }

  componentWillReceiveProps(newProps) {
    let oldData = this.props.showEditDialog;
    let newData = newProps.showEditDialog;
    console.log(newProps)

    if (oldData!=null &&　(oldData != newData)) {
      this.setState({ visible: newData })
    }

  }

  render() {
    const { visible, loading } = this.state
    const editData = this.props.editData
    const { getFieldDecorator } = this.props.form

    const formItemLayout = null
    
    return (
      <div>
        <Modal
          visible={visible}
          title="新增数据源"
          width='800'
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="test" type="primary" loading={loading} onClick={this.handleOk}>
              测试
            </Button>,
            <Button key="submit" type="warning"  loading={loading} onClick={this.handleOk}>
              保存
            </Button>,
            <Button key="back" onClick={this.handleCancel}>取消</Button>,
          ]}
        >
          <Form 
            layout='vertical'
            onSubmit={this.handleSubmit}>
            <Row gutter={32}>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="数据源名称"
                >
                  <Input />
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="数据源类型"
                  hasFeedback
                >
                  {getFieldDecorator('select', {
                    rules: [
                      { required: true, message: '请选择数据源类型' },
                    ],
                  })(
                    <Select placeholder="请选择一个数据源类型">
                      <Option value="ORACLE">ORACLE</Option>
                      <Option value="MYSQL">MYSQL</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={32}>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="连接方式"
                  hasFeedback
                >
                  {getFieldDecorator('select', {
                    rules: [
                      { required: true, message: '请选择连接方式' },
                    ],
                  })(
                    <Select placeholder="请选择一个连接方式">
                      <Option value="JDBC">JDBC</Option>
                      <Option value="OTHER">OTHER</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="主机IP"
                >
                  <Input />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={32}>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="端口名"
                >
                  <Input />
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="用户名"
                >
                  <Input />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={32}>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="数据库名称"
                >
                  <Input />
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="密码"
                >
                  <Input />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={32}>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="驱动程序"
                >
                  <Input />
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="数据源URL"
                >
                  <Input />
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
    )
  }
}

const EditDsManagerData = Form.create()(EditDsManager)

export default EditDsManagerData