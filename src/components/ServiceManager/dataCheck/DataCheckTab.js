import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon, Footer, Button, Input, Row, Col, Tree, Pagination, Modal,DatePicker  } from 'antd'
import CommonTable from '../../common/CommonTable/CommonTable'
import getSize from '../../../utils/getSize'
import CommonTreeNode from '../../common/CommonTreeNode/CommonTreeNode'
import treeData from './tree.json'
import app from '../images/app.png'

export default class DataCheckTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
		startValue: null,	//开始时间
		endValue: null,		//结束时间
		endOpen: false,		//定义是否打开日历?
    }
  }


  //=======DataPicker的方法====
		disabledStartDate = (startValue) => {
			const endValue = this.state.endValue;
			if (!startValue || !endValue) {
			return false;
			}
			return startValue.valueOf() > endValue.valueOf();
		}

		disabledEndDate = (endValue) => {
			const startValue = this.state.startValue;
			if (!endValue || !startValue) {
			return false;
			}
			return endValue.valueOf() <= startValue.valueOf();
		}

		onChange = (field, value) => {
			this.setState({
			[field]: value,
			});
		}

		onStartChange = (value) => {
			this.onChange('startValue', value);
		}

		onEndChange = (value) => {
			this.onChange('endValue', value);
		}

		handleStartOpenChange = (open) => {
			if (!open) {
			this.setState({ endOpen: true });
			}
		}

		handleEndOpenChange = (open) => {
			this.setState({ endOpen: open });
		}

	//=======end========

	

  render() {
	const { startValue, endValue, endOpen } = this.state;
    const { commonTable, dispatch, menuState } = this.props;
    const url = 'http://www.xxx.com?xs'
    const pageSize = 2
    const rowSelection = true;
   

	//接口分类树的参数
     const tree = { 
      data: treeData,
      checkable: true,
      onExpand: this.onExpand, 
      onCheck: this.onCheck, 
      onSelect: this.onSelect,
      expandedKeys: ["a","f"],
      autoExpandParent: true,
      checkedKeys: ["f","k"],
      selectedKeys: [],
      showLine:true,
      url:"http://abc.sss.com"
    }

	const columns = [{
      title: '操作时间',
      dataIndex: 'czsj',
      key: 'czsj',
      render: text => <a href="#">{text}</a>,
    }, {
      title: '操作用户',
      dataIndex: 'czyh',
      key: 'czyh'
    }, {
      title: '异常数据',
      dataIndex: 'ycsj',
      key: 'ycsj'
    }, {
      title: '总数据',
      dataIndex: 'zsj',
      key: 'zsj'
    }, {
      title: '操作',
      key: 'cz',

      render: (text, record, index) => (<div >
        <Button type="primary" onClick={() => { console.log(text, record, index)  }} ghost  >审核</Button>
      </div>)
    }];

    const data = [{
      key: 1,
      czsj: '2017-5-12 15:19:12',
      czyh: 'admin',
      ycsj: 0,
      zsj: 1,
    }, {
      key: 2,
      czsj: '2017-5-12 15:19:12',
      czyh: 'admin',
      ycsj: 0,
      zsj: 1,
    }, {
      key: 3,
      czsj: '2017-5-12 15:19:12',
      czyh: 'admin',
      ycsj: 0,
      zsj: 1,
    }];

	const pagination = data ? { total: data.length, current: 1, pageSize: pageSize } : {}
    const tableData = data ? { columns, data, pagination, pageSize, url, rowSelection } : { columns, pageSize, url, rowSelection }

    return (<div>
      
	   <div style={{background:"#E5E5E5",height:'43px',lineHeight:'43px',paddingLeft:'20px'}}>
            <img src={app}/>
            <span style={{fontSize:'16px',background:"#E5E5E5",color:"#03a9f5",marginLeft:'10px'}}>数据审核</span>
        </div>

      <Row style={{ height: '100%' }}>
        <Col span={3} >
          <div style={{ padding: 20, borderRight: '2px solid #ccc', height: getSize().contentH - 300 }}>
             <CommonTreeNode tree={tree} />
          </div>
        </Col>
        <Col span={20}>
          <div style={{ padding: 22 }}>
            <p style={{ float: 'left' }}> 操作用户 :  <Input size="default" placeholder="系统管理" style={{ width: '50%' }} />&nbsp;&nbsp;</p>
            <p style={{ float: 'left', marginLeft: '-35px' }}> 
				操作时间 :
					<DatePicker
					disabledDate={this.disabledStartDate}
					showTime
					format="YYYY-MM-DD HH:mm:ss"
					value={startValue}
					placeholder="Start"
					onChange={this.onStartChange}
					onOpenChange={this.handleStartOpenChange}/>
				至:
					<DatePicker
					disabledDate={this.disabledEndDate}
					showTime
					format="YYYY-MM-DD HH:mm:ss"
					value={endValue}
					placeholder="End"
					onChange={this.onEndChange}
					open={endOpen}
					onOpenChange={this.handleEndOpenChange}/>
			</p>
            <Button type="Default" style={{ left: '30px', float: 'left' }}>查询</Button>
            <Button type="primary" style={{ left: '20px', float: 'left' }}>重置</Button>
            <div style={{ float: 'right', marginRight: '30px' }}>
              <Button type="danger" style={{ float: 'right', marginRight: '10px' }}>删除</Button>
            </div >
            <div style={{ float: 'left', width: '100%', marginTop: '15px' }}>
              <CommonTable {...({ tableData, commonTable, dispatch }) } />
            </div>
          </div>
        </Col>
      </Row>
    </div>)
  }
}
