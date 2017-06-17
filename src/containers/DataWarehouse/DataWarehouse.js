import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { Layout, Menu, Breadcrumb, Icon, Footer, Button, Col, Row, Input } from 'antd'
import Header from '../../components/common/Header/Header'
import Copyright from '../../components/common/Copyright/Copyright'
import CommonTable from '../../components/common/CommonTable/CommonTable'
import CommonTreeNode from '../../components/common/CommonTreeNode/CommonTreeNode'
import getSize from '../../utils/getSize'
import sjck from './images/sjck.png'
import styles from './DataWarehouse.css'
import treeData from './tree.json'


class DataWarehouse extends Component {
  constructor() {
    super()
    this.state = {
      current: '1',
      openKeys: [],
      theme: 'dark',
    }
  }


  handleClick = (e) => {
    console.log('Clicked: ', e);
    this.setState({ current: e.key });
  }
  onOpenChange = (openKeys) => {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  }
  getAncestorKeys = (key) => {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  }


  // treeNode需要用到的方法
  onExpand = (expandedKeys) => {
    console.log(expandedKeys);
  }
  onCheck = (checkedKeys) => {
    console.log(checkedKeys)
  }
  onSelect = (props) => {
    console.log(props)
    console.log(props.value)
  }



  render() {

    const SubMenu = Menu.SubMenu;
    const { Content, Sider } = Layout;
    const { commonTable, dispatch, menuState } = this.props;
    const url = 'http://www.xxx.com?xs'
    const pageSize = 2
    const columns = [{
      title: '事实表名称',
      dataIndex: 'ssbmc',
      key: 'ssbmc',
      render: text => <a href="#">{text}</a>,
    }, {
      title: '物理表名',
      dataIndex: 'wlbm',
      key: 'wlbm',
    }, {
      title: '是否建表',
      dataIndex: 'sfjb',
      key: 'sfjb',
    }, {
      title: '事实表描述',
      dataIndex: 'ssbms',
      key: 'ssbms',
    }];

    const data = [{
      key: '1',
      ssbmc: 'John Brown',
      wlbm: '32',
      sfjb: 'New York No. 1 Lake Park',
      ssbms: 'hrs'
    }, {
      key: '2',
      ssbmc: 'Jim Green',
      wlbm: '42',
      sfjb: 'London No. 1 Lake Park',
      ssbms: 'hrs'
    }, {
      key: '3',
      ssbmc: 'Joe Black',
      wlbm: '32',
      sfjb: 'Sidney No. 1 Lake Park',
      ssbms: 'hrs'
    }];
    const rowSelection = true;
    const pagination = data ? { total: data.length, current: 1, pageSize: pageSize } : {}
    const tableData = data ? { columns, data, pagination, pageSize, url, rowSelection } : { columns, pageSize, url, rowSelection }


    // treeNode用到的参数,测试阶段data必填。请求后台数据时，url必填
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

    return (

      <Layout style={{ background: '#eeeeee' }}>
        <Header {...({ dispatch, menuState }) } />
        <Layout className={styles.breadcrumb_div}>
          <Breadcrumb>
            <Icon type="home" className={styles.breadcrumb_div_icon} /><span className={styles.breadcrumb_div_span}>当前位置：服务中心 > 数据仓库</span>
          </Breadcrumb>
        </Layout>
        <Layout>
          <Sider width={225} style={{ background: '#404040' }}>

            <div className={styles.sub_menu_title}>
              <img src={sjck} />
              <div style={{ color: 'white' }}>数据仓库</div>
            </div>

            <Menu
              theme={this.state.theme}
              mode="inline"
              openKeys={this.state.openKeys}
              selectedKeys={[this.state.current]}
              onOpenChange={this.onOpenChange}
              onClick={this.handleClick}
              style={{ height: getSize().contentH - 365 }}
            >


              <Menu.Item key="appManager" >
                <Icon type="area-chart" />事实表
                </Menu.Item>
              <Menu.Item key="dsManager" >
                <Icon type="bar-chart" />维度表
                </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '24px' }}>

            <Content style={{ background: '#fff' }}>
              <p style={{ padding: 10, fontSize: '20px', background: "#ccc", color: "RGB(3,169,243)" }}>
                <Icon type="bar-chart" />
                维度表
                  </p>
              <Row style={{ height: '100%' }}>
                <Col span={6} style={{ height: '100%' }}>
                  <div style={{ padding: 20, borderRight: '2px solid #ccc', height: getSize().contentH - 300 }}>
                    <CommonTreeNode tree={tree} />
                  </div>
                </Col>
                <Col span={18}>
                  <div style={{ padding: 20 }}>
                    <p>
                      事实表名称:<Input style={{ display: 'inline-block', width: 50 }} />
                      物理表名称:<Input style={{ display: 'inline-block', width: 50 }} />
                      <button className={styles.button} style={{ backgroundColor: 'RGB(3,169,245)' }}>查询</button>
                      <button className={styles.button} style={{ backgroundColor: 'RGB(255,255,255)', color: 'black' }}>重置</button>
                      <button className={styles.button} style={{ backgroundColor: 'RGB(3,169,245)' }}>新增</button>
                      <button className={styles.button} style={{ backgroundColor: 'RGB(254,201,109)' }}>修改</button>
                      <button className={styles.button} style={{ backgroundColor: 'RGB(255,117,104)' }}>删除</button>
                      <button className={styles.button} style={{ backgroundColor: 'RGB(101,125,249)' }}>导入</button>
                      <button className={styles.button} style={{ backgroundColor: 'RGB(111,200,110)' }}>建表</button>
                    </p>
                    <CommonTable {...({ tableData, commonTable, dispatch }) } />


                  </div>

                </Col>
              </Row>

            </Content>
          </Layout>
        </Layout>

        <Copyright />


      </Layout>
    )
  }

}


function mapStateToProps(state) {
  const { menuState, commonTable } = state
  return { menuState, commonTable }
}

export default connect(mapStateToProps)(DataWarehouse)