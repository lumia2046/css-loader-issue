import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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
import LIST_ICON from '../Image/LIST_ICON.png'

// 组件库
import CardModule from './../Common/CardModule'
import NavBar from './../../../components/common/CommonLeftNavBar/LeftNavBar'
import MyTag from './../Common/MyTag'
import DoubleEchartsModule from './../Common/DoubleEchartsModule'
import PieEchartsModule from './../Common/PieEchartsModule'
import BarEchartsModule from './../Common/BarEchartsModule'

const Search = Input.Search;

class BusinessDbTotalRunInfo extends Component {
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

    var clickName = this.state.clickName;

    return (
      <div className={css.ZTYXKQTopDiv}>
        <div>
          <p className={css.ZTYXKQButtonPLeft}>
            <Button type="primary" style={{ borderRadius: 30 }}><Link to={`/businessDb/TotalRunInfo`} onClick={() => { }}>总体运行分析情况</Link></Button>
            <Button type="dashed" style={{ backgroundColor: '#EEEEEE', marginLeft: 5, border: 0, borderRadius: 30 }}><Link to={`/businessDb/TableSearch`} onClick={() => { }}>全量数据库查询</Link></Button>
            <Button type="dashed" style={{ backgroundColor: '#EEEEEE', marginLeft: 5, border: 0, borderRadius: 30 }}><Link to={`/businessDb/CodeSetSearch`} onClick={() => { }}>代码集查看</Link></Button>
          </p>
        </div>
        <div style={{ paddingTop: 45 }}>
          <DoubleEchartsModule />
        </div>
        <div style={{ paddingTop: 15, width: '103%' }}>
          <div style={{ width: '48%', float: 'left', marginRight: 15 }}><PieEchartsModule /></div>
          <div style={{ width: '48%', float: 'left' }}><BarEchartsModule /></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { menuState, hashUrl } = state;
  return { menuState, hashUrl }
}

export default connect(mapStateToProps)(BusinessDbTotalRunInfo)
