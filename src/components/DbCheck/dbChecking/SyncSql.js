import React,{Component} from 'react'
import { Modal, Button, Form, Input, AutoComplete } from 'antd';

const FormItem = Form.Item;

class SyncSql extends React.Component {
 
  constructor(){
    super()

    this.state = {
    loading: false,
    visible: false
  }

  }
  
  handleOk = () => {
    this.setState({ loading: true });
    if(this.props.setSyncDialogState) {
      this.props.setSyncDialogState()
    }

    this.setState({ loading: false, visible: false });
  }
  handleCancel = () => {
    this.setState({ visible: false });
    if(this.props.setSyncDialogState){
      this.props.setSyncDialogState()
    }
  }

    componentWillReceiveProps(newProps) {

    let oldData = this.props.showSyncDialog;
    let newData = newProps.showSyncDialog;
    console.log(newProps)

    if (oldData!=null &&　(oldData != newData)) {
      this.setState({ visible: newData })
    }

  }


  render() {

    const { visible, loading } = this.state;
    console.log('**************getFieldDecorator*******************')
    console.log(this.props.form)


    
    return (

      <div>
       
        <Modal
          visible={visible}
          title="同步脚本"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="submit" type="primary" size="large" loading={loading} onClick={this.handleOk}>
              复制脚本
            </Button>
          ]}
        >
          <Form onSubmit={this.handleSubmit}>
            
          </Form>
        </Modal>
      </div>
    );
  }
}



export default SyncSql
