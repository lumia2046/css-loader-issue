import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// import {fetchHomePageData} from '../../actions'
import { Layout, Row, Col, Button, Card, Input } from 'antd'
import Header from '../../../components/common/Header/Header'
import Copyright from '../../../components/common/Copyright/Copyright'
import getSize from '../../../utils/getSize'
import css from '../CSS/BusinessDb.css'

// 组件库
import NavBar from './../../../components/common/CommonLeftNavBar/LeftNavBar'
import BusinessDbTotalRunInfo from './BusinessDbTotalRunInfo'
import BusinessDbTableSearch from './BusinessDbTableSearch'
import BusinessDbSystemIndex from './BusinessDbSystemIndex'
import BusinessDbTableStructure from './BusinessDbTableStructure'
import BusinessDbTableDataSearch from './BusinessDbTableDataSearch'
import BusinessDbCodeSetSearch from './BusinessDbCodeSetSearch'

// 图片
import CWYWSJ_IMG from '../../../containers/BusinessDb/Image/CWYWSJ_IMG.png'
import JWYWSJ_IMG from '../../../containers/BusinessDb/Image/JWYWSJ_IMG.png'
import TSYWSJ_IMG from '../../../containers/BusinessDb/Image/TSYWSJ_IMG.png'
import XGYWSJ_IMG from '../../../containers/BusinessDb/Image/XGYWSJ_IMG.png'
import YSYWSJ_IMG from '../../../containers/BusinessDb/Image/YSYWSJ_IMG.png'
import ZTGS_IMG from '../../../containers/BusinessDb/Image/ZTGS_IMG.png'

class BusinessDbFrame extends Component {
  constructor() {
    super()
    this.state = {};
  }

  render() {
    const { Content, Footer, Sider } = Layout;
    const { dispatch, menuState, hashUrl } = this.props;
    const baseUrl = hashUrl.currentUrl.substr(0, hashUrl.currentUrl.lastIndexOf('/'))

    return (
      <Row>
        {/* 左侧导航 */}
        <Col span={5} style={{ height: getSize.windowH, overflow: 'auto' }}>
          <NavBar initObj={
          [
            { img: ZTGS_IMG, title: '总体描述', linkTo: "/businessDb/TotalRunInfo" },
            { img: YSYWSJ_IMG, title: '人事业务数据', linkTo: "/businessDb/SystemIndex/1" },
            { img: JWYWSJ_IMG, title: '教务业务数据', linkTo: "/businessDb/SystemIndex/2" },
            { img: TSYWSJ_IMG, title: '图书业务数据', linkTo: "/businessDb/SystemIndex/3" },
            { img: XGYWSJ_IMG, title: '学工业务数据', linkTo: "/businessDb/SystemIndex/4" },
            { img: CWYWSJ_IMG, title: '财务业务数据', linkTo: "/businessDb/SystemIndex/5" }
          ]}
          />
        </Col>
        {/* 右侧内容 */}
        <Col span={19}>
          {hashUrl.currentUrl.indexOf(`/businessDb/TotalRunInfo`) > -1 && <BusinessDbTotalRunInfo />}
          {hashUrl.currentUrl.indexOf(`/businessDb/TableSearch`) > -1 && <BusinessDbTableSearch />}
          {hashUrl.currentUrl.indexOf(`/businessDb/CodeSetSearch`) > -1 && <BusinessDbCodeSetSearch />}
          {hashUrl.currentUrl.indexOf(`/businessDb/SystemIndex`) > -1 && <BusinessDbSystemIndex />}
          {hashUrl.currentUrl.indexOf(`/businessDb/TableStructure`) > -1 && <BusinessDbTableStructure />}
          {hashUrl.currentUrl.indexOf(`/businessDb/TableDataSearch`) > -1 && <BusinessDbTableDataSearch />}
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  const { menuState, hashUrl } = state;
  return { menuState, hashUrl }
}

export default connect(mapStateToProps)(BusinessDbFrame);
