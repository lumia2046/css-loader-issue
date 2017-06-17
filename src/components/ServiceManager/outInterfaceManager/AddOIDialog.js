import { Modal, Button ,Steps ,message} from 'antd';
import React from 'react'
import CheckInterfaceDialogContent from './CheckInterfaceDialogContent'
import Styles  from './OutInterfaceManagerTab.css'
import AddOIDialogContent1 from './AddOIDialogContent1'
import AddOIDialogContent2 from './AddOIDialogContent2'
import AddOIDialogContent2Form from './AddOIDialogContent2Form'
import AddOIDialogContent3 from './AddOIDialogContent3'
import AddOIDialogContent4 from './AddOIDialogContent4'
import AddOIDialogContent5 from './AddOIDialogContent5'
import AddOIDialogContent6 from './AddOIDialogContent6'

export default class AddOIDialog extends React.Component {
    constructor(props){
        super(props)
         this.state = { 
             visible: false ,
             current: 0, //step的参数
        }
       
    }

 
  showModal = () => {
    this.setState({
      visible: true,
      
    });
  }
  handleOk = (e) => {
    console.log(e);
    
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

    //====step方法===
     next() {
        const current = this.state.current + 1;
        this.setState({ current });
        }
        prev() {
            const current = this.state.current - 1;
            this.setState({ current });
        }
  
    //========


  render() {
    //=======steps========
    const Step = Steps.Step;
    const { current } = this.state;
    var key = ''
    const steps = [{
        title: '接口基本信息',
        content: (<div style={{height:'550px'}}><AddOIDialogContent1/></div>),
    }, {
        title: '数据表选择',
        content: (<div style={{height:'550px'}}><AddOIDialogContent2/></div>),
    }, {
        title: '字段关联关系',
        content: (<div style={{height:'550px',padding: '20px'}}><AddOIDialogContent3/></div>),
    }, {
        title: '参数定义',
        content: (<div style={{height:'550px'}}><AddOIDialogContent4/></div>),
    }, {
        title: '过滤条件',
        content: (<div style={{height:'550px'}}><AddOIDialogContent5/></div>),
    }, {
        title: '完成',
        content: (<div style={{height:'550px',padding: '50px'}}><AddOIDialogContent6/></div>),
    }];

   

    //=======


    return (
        
      <div>
        <Button type="primary" onClick={this.showModal}>新增</Button>
        <Modal
          title="新增接口"
          closable='true'
          okText='下一步'
          visible={this.state.visible}
          onCancel={this.handleCancel}
          width='1100'
          footer={ <div >
                    {
                        this.state.current < steps.length - 1
                        &&
                        <Button type="primary" className={Styles.add_inter_butt_type} onClick={() => this.next()}>下一步</Button>
                    }
                    {
                        this.state.current === steps.length - 1
                        &&
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>完成</Button>
                    }
                    {
                        this.state.current > 0
                        &&
                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                        上一步
                        </Button>
                    }
                    </div>}
        >
          <div > 
                <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)} 
                
                </Steps>

                    <div>{steps[this.state.current].content}</div> 

          </div>
        </Modal>
      </div>
    );
  }
}

