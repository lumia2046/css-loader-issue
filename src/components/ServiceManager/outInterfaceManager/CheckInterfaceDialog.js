import React, { Component } from 'react';
import { Modal, Button, Input } from 'antd';
import CheckInterfaceDialogContent from './CheckInterfaceDialogContent'
import Styles  from './OutInterfaceManagerTab.css'

export default class CheckInterfaceDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
    
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
    if(this.props.setShowCheckInterfaceDialog) {
      this.props.setShowCheckInterfaceDialog()
    }
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
    if(this.props.setShowCheckInterfaceDialog) {
      this.props.setShowCheckInterfaceDialog()
    }
  }

    

  componentWillReceiveProps(newProps){
    let oldData = this.props.showCheckInterfaceDialog;
    let newData = newProps.showCheckInterfaceDialog;
    if(oldData!=null && (oldData!=newData)){
      this.setState({visible:newData})
    }
  }
  
  render() {
    return (
      <div>
        <Modal
          title="测试接口"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width='1000'
        >
          <div style={{padding: '33px 333px 38px 118px'}}>
             <CheckInterfaceDialogContent  />
          </div>
          <div type={{    height: '143.5px',width:'700px',left: '138px'}}>
            <Input type="textarea"   placeholder="Autosize height based on content lines" className={Styles.ant_input2} rows={6} />
          </div>
        </Modal>
      </div>
    );
  }
}
