import React, { Component, PropTypes } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// import {fetchHomePageData} from '../../actions'
import { Layout, Row, Col, Button, Card, Input } from 'antd'
import Header from '../../../components/common/Header/Header'
import getSize from '../../../utils/getSize'
import css from '../CSS/BusinessDb.css'


// 组件库
import TableStructure from './../Common/TableStructure'
import ZTBCX_ICON from '../Image/ZTBCX_ICON.png'

const Search = Input.Search;

class BusinessDbTableStructure extends Component {
  constructor() {
    super()
    this.state = {};
  }

  render() {
    const { Content, Footer, Sider } = Layout;
    const { dispatch, menuState, hashUrl } = this.props;
    const baseUrl = hashUrl.currentUrl.substr(0, hashUrl.currentUrl.lastIndexOf('/'))

    return (
      <div className={css.ZTYXKQTopDiv}>
        <div>
          <p className={css.ZTYXKQButtonPLeft}>
            <Button type="dashed" style={{ backgroundColor: '#EEEEEE', marginLeft: 5, border: 0, borderRadius: 30 }} ><Link to={`/businessDb/SystemIndex`} onClick={() => {}}>总体</Link></Button>
            <Button type="primary" style={{ borderRadius: 30 }} ><Link to={`/businessDb/TableStructure`}  onClick={() => {}}>表结构查询</Link></Button> 
          </p>
        </div>
        <div style={{ paddingTop: 45 }}>
          <div className={css.echartsHead}><img src={ZTBCX_ICON} /><font>学工业务数据</font></div>
          <div className={css.echartsBody} style={{ height: 650, backgroundColor: '#FFFFFF' }}>
            <div style={{ paddingTop: 25, paddingBottom: 25, paddingLeft: '3%', textAlign: 'left' }} >
              分类名：<Input placeholder="Basic usage" style={{ width: '150px', marginRight: '10px' }} />
              表名：  <Input placeholder="Basic usage" style={{ width: '150px', marginRight: '10px' }} />
              表描述：<Input placeholder="Basic usage" style={{ width: '150px', marginRight: '10px' }} />
              <Button type="primary">查询</Button>
            </div>
            <div style={{ paddingLeft: '3%', paddingRight: '3%', textAlign: 'center' }} >
              <TableStructure />
            </div>
          </div>
        </div>
      </div>
    )

  }
}

function mapStateToProps(state) {
  const { menuState, hashUrl } = state;
  return { menuState, hashUrl }
}

export default connect(mapStateToProps)(BusinessDbTableStructure);
