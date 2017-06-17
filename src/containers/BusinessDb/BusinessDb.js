import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import {fetchHomePageData} from '../../actions'
import { Layout, Row, Col, Button, Card, Input, Breadcrumb } from 'antd'
import Header from '../../components/common/Header/Header'
import Copyright from '../../components/common/Copyright/Copyright'
import getSize from '../../utils/getSize'
import css from './CSS/BusinessDb.css';

import CWYWSJ_IMG from './Image/CWYWSJ_IMG.png';
import JWYWSJ_IMG from './Image/JWYWSJ_IMG.png';
import TSYWSJ_IMG from './Image/TSYWSJ_IMG.png';
import XGYWSJ_IMG from './Image/XGYWSJ_IMG.png'
import YSYWSJ_IMG from './Image/YSYWSJ_IMG.png'
import ZTGS_IMG from './Image/ZTGS_IMG.png'


// 页面
import BusinessDbIndex from './Page/BusinessDbIndex'
import BusinessDbFrame from './Page/BusinessDbFrame'
import BusinessDbTablePermission from './Page/BusinessDbTablePermission'
import TestFetch from './TestFetch'

class BusinessDb extends Component {
  constructor() {
    super()
    this.state = {};
    sessionStorage.setItem('BusinessDbBreadCrumb', null);

  }


  render() {
    const { Content, Footer, Sider } = Layout;
    const { dispatch, menuState, hashUrl } = this.props;
    const baseUrl = hashUrl.currentUrl.substr(0, hashUrl.currentUrl.lastIndexOf('/'))

    return (

      <Layout>
        <Header {...({ dispatch, menuState }) } />
        
        <TestFetch />
        {(hashUrl.currentUrl == `/businessDb/index`) && <BusinessDbIndex />}
        { ((hashUrl.currentUrl != `/businessDb/index`) && (hashUrl.currentUrl != `/businessDb/tablePermission`)) && <BusinessDbFrame />}
        {(hashUrl.currentUrl == `/businessDb/tablePermission`) && <BusinessDbTablePermission />}
        <Copyright />
      </Layout>

    )
  }
}

function mapStateToProps(state) {
  const { menuState, hashUrl } = state;
  return { menuState, hashUrl }
}

export default connect(mapStateToProps)(BusinessDb)
