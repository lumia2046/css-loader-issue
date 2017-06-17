import React,{Component} from 'react'
import { Modal, Button, Form, Input, AutoComplete } from 'antd';

const FormItem = Form.Item;

class EditApplication extends React.Component {
 
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
    const { visible, loading } = this.state;
    const editData = this.props.editData
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    
    return (
      <div>
        <Modal
          visible={visible}
          title="修改系统"
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
              <Input value={editData.xtmc} />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="系统URL"
            >
              <Input value={editData.xturl} />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="系统IP"
            >
              <Input value={editData.xtip} />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="管理员邮箱"
            >
              <Input value={editData.glyyx} />
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

const EditApplicationData = Form.create()(EditApplication)

export default EditApplicationData
