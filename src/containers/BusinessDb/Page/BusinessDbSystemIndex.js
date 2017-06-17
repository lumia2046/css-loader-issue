import React, { Component, PropTypes } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// import {fetchHomePageData} from '../../actions'
import { Layout, Row, Col, Button, Card, Input } from 'antd'
import Header from '../../../components/common/Header/Header'
import getSize from '../../../utils/getSize'
import css from '../CSS/BusinessDb.css'

import CWYWSJ_IMG from '../Image/CWYWSJ_IMG.png'
import JWYWSJ_IMG from '../Image/JWYWSJ_IMG.png'
import TSYWSJ_IMG from '../Image/TSYWSJ_IMG.png'
import XGYWSJ_IMG from '../Image/XGYWSJ_IMG.png'
import YSYWSJ_IMG from '../Image/YSYWSJ_IMG.png'
import ZTGS_IMG from '../Image/ZTGS_IMG.png'

// 组件库
import CardModule from './../Common/CardModule'
import NavBar from './../../../components/common/CommonLeftNavBar/LeftNavBar'
import MyTag from './../Common/MyTag'
import DoubleEchartsModule from './../Common/DoubleEchartsModule'
import PieEchartsModule from './../Common/PieEchartsModule'
import BarEchartsModule from './../Common/BarEchartsModule'
import HotSearchTable from './../Common/HotSearchTable'
import LineEchartsModule from './../Common/LineEchartsModule'

const Search = Input.Search;

class BusinessDbSystemIndex extends Component {
  constructor() {
    super()
    this.state = {};
  }

  changeState(clickName) {
    this.props.changeState(clickName);
  }

  render() {
    const { Content, Footer, Sider } = Layout;
    const { dispatch, menuState, hashUrl } = this.props;
    const baseUrl = hashUrl.currentUrl.substr(0, hashUrl.currentUrl.lastIndexOf('/'))


    return (
      <div className={css.ZTYXKQTopDiv}>
        <div>
          <p className={css.ZTYXKQButtonPLeft}>
            <Button type="primary" style={{ borderRadius: 30 }}><Link to={`/businessDb/SystemIndex`} onClick={() => {}}>总体</Link></Button>
            <Button type="dashed" style={{ backgroundColor: '#EEEEEE', marginLeft: 5, border: 0, borderRadius: 30 }}><Link to={`/businessDb/TableStructure`}  onClick={() => {}}>表结构查看</Link></Button>
          </p>
        </div>
        <div style={{ paddingTop: 45, width: '103%'}}>
          <div style={{ width: '48%', float: 'left', marginRight: 15 }}><PieEchartsModule /></div>
          <div style={{ width: '48%', float: 'left' }}><HotSearchTable /></div>
        </div>
        <div style={{ paddingTop: 15, width: '100%', clear: 'left'}}>
          <LineEchartsModule />
        </div>
      </div>
    )

  }
}

function mapStateToProps(state) {
  const {menuState,hashUrl} = state;
  return {menuState,hashUrl}
}

export default connect(mapStateToProps)(BusinessDbSystemIndex)
