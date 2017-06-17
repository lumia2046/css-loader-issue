import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// import {fetchHomePageData} from '../../actions'
import { Layout, Menu, Breadcrumb, Icon, Footer, Button, Input, Row, Col, Tree, Pagination, Tabs } from 'antd'
import Header from '../../../components/common/Header/Header'
import Copyright from '../../../components/common/Copyright/Copyright'
import getSize from '../../../utils/getSize'
import css from '../CSS/BusinessDb.css'
import styles from './../../ServiceManager/ServiceManager.css'

// 组件库
import NavBar from './../../../components/common/CommonLeftNavBar/LeftNavBar'
import BusinessDbTotalRunInfo from './BusinessDbTotalRunInfo'
import BusinessDbTableSearch from './BusinessDbTableSearch'
import BusinessDbSystemIndex from './BusinessDbSystemIndex'
import BusinessDbTableStructure from './BusinessDbTableStructure'
import BusinessDbTableDataSearch from './BusinessDbTableDataSearch'
import UserTreeNode from './../Common/UserTreeNode'
import CommonTreeNode from './../../../components/common/CommonTreeNode/CommonTreeNode'
import EditableTable from '../Common/EditableTable'

// 图片
import ywsjk from './../Image/ywsjk.png'
import ZTBCX_ICON from './../Image/ZTBCX_ICON.png'


const TabPane = Tabs.TabPane;
const Search = Input.Search;

class BusinessDbTablePermission extends Component {
  constructor() {
    super()
    this.state = {
      flag: 'appManager',
      current: 'appManager',
      openKeys: [],
      theme: 'dark',
      tab: []
    }

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


  handleTableChange = (searchType, searchName) => {
    this.setState({
      searchType: searchType,
      searchName: searchName
    });
  }

  render() {
    const { Content, Footer, Sider } = Layout;
    const { dispatch, menuState, hashUrl } = this.props;
    const baseUrl = hashUrl.currentUrl.substr(0, hashUrl.currentUrl.lastIndexOf('/'))

    const TreeNode = Tree.TreeNode;
    const SubMenu = Menu.SubMenu;

    function callback(key) {
      console.log(key);
    }



    return (
      <Row>
        {/* 左侧导航 */}
        <Col span={4} style={{ height: getSize().windowH, overflow: 'auto' }}>
          <Sider width='100%' style={{ background: '#404040' }}>

            <div className={styles.sub_menu_title}>
              <img src={ywsjk} />
              <div style={{ color: 'white', fontSize: '14px' }}>业务数据库</div>
            </div>

            <Menu
              theme={this.state.theme}
              mode="inline"
              openKeys={this.state.openKeys}
              defaultSelectedKeys={[this.state.current]}
              onOpenChange={this.onOpenChange}
              style={{ height: getSize().contentH - 365 }}
              onClick={(item) => {
                this.setState({ flag: item.key })
              }}
            >

              <Menu.Item key="appManager" >
                <Icon type="setting" />表配置权限
              </Menu.Item>
            </Menu>
          </Sider>
        </Col>
        {/* 右侧内容 */}
        <Col span={20}>
          <div style={{ paddingLeft: '2%', paddingTop: '2%', paddingRight: '2%' }}>
            <div className={css.echartsHead}><img src={ZTBCX_ICON} /><font>表权限配置</font></div>
            {/** <div className={css.echartsBody} style={{ height: getSize().contentH - 365, backgroundColor: '#FFFFFF' }} > **/}
            <div className={css.echartsBody} style={{ height: 600, backgroundColor: '#FFFFFF', border: '1px solid #EEEEEE' }} >
              <Row gutter={8}>
                {/** 左边表资源布局 **/}
                <Col span={6} style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 10, paddingTop: 10, marginRight: 8, borderRight: '1px solid #EEEEEE' }}>
                  <div style={{ width: '100%', height: '40px', lineHeight: '35px', paddingLeft: '15px', borderBottom: '1px solid #EEEEEE' }}>业务库资源</div>
                  <div style={{ width: '100%', textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
                    <Search
                      placeholder="input search text"
                      style={{ width: 200 }}
                      onSearch={value => console.log(value)}
                    />
                  </div>
                  <div>
                    <UserTreeNode handleTableChange={this.handleTableChange} />
                  </div>
                </Col>
                {/** 中间表格授权查看 **/}
                <Col span={12}>
                  <EditableTable handleTableChange={this.handleTableChange} />
                </Col>
                {/** 右侧用户角色布局 **/}
                <Col span={5} style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 8, paddingTop: 10, borderLeft: '1px solid #EEEEEE' }}>
                  <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="用户" key="1">
                      <div style={{ textAlign: 'center' }}>
                        <Search
                          placeholder="input search text"
                          style={{ width: 200 }}
                          onSearch={value => console.log(value)}
                        />
                      </div>
                      <div>
                        <UserTreeNode handleTableChange={this.handleTableChange} />
                      </div>
                    </TabPane>
                    <TabPane tab="角色" key="2">
                      <div style={{ textAlign: 'center' }}>
                        <Search
                          placeholder="input search text"
                          style={{ width: 200 }}
                          onSearch={value => console.log(value)}
                        />
                      </div>
                      <div>
                        <UserTreeNode handleTableChange={this.handleTableChange} />
                      </div>
                    </TabPane>
                  </Tabs>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  const { menuState, hashUrl } = state;
  return { menuState, hashUrl }
}

export default connect(mapStateToProps)(BusinessDbTablePermission);
