import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// import {fetchHomePageData} from '../../actions'
import { Layout, Row, Col, Button, Card, Input, Popover } from 'antd'
import Header from '../../../components/common/Header/Header'
import getSize from '../../../utils/getSize'
import css from '../CSS/BusinessDb.css'


// 组件库
import TableDataSearch from './../Common/TableDataSearch'
import ZTBCX_ICON from '../Image/ZTBCX_ICON.png'

const Search = Input.Search;

class BusinessDbTableDataSearch extends Component {
  constructor() {
    super()
    this.state = {};
  }

  render() {
    const { Content, Footer, Sider } = Layout;
    const { dispatch, menuState, hashUrl } = this.props;
    const baseUrl = hashUrl.currentUrl.substr(0, hashUrl.currentUrl.lastIndexOf('/'))

    const content = (
      <div style={{ width: 200, height:'150px', textAlign: 'center'}} >
        <p>
          <div style={{ backgroundColor: '#03A8F4', color: '#FFFFFF', border: '1px solid #E5E5E5', width:'40%', clear:'left', float:'left'}}>字段</div>
          <div style={{ backgroundColor: '#03A8F4', color: '#FFFFFF', border: '1px solid #E5E5E5', width:'30%', float:'left'}}><input type="checkbox" name="checkbox" id="checkbox" />显示</div>
          <div style={{ backgroundColor: '#03A8F4', color: '#FFFFFF', border: '1px solid #E5E5E5', width:'30%', float:'left'}}><input type="checkbox" name="checkbox" id="checkbox" />查询</div>
        </p>
        <p>
          <div style={{ border: '1px solid #E5E5E5', width:'40%', clear:'left', float:'left'}}>考生号</div>
          <div style={{ border: '1px solid #E5E5E5', width:'30%', float:'left'}}><input type="checkbox" name="checkbox" id="checkbox" /></div>
          <div style={{ border: '1px solid #E5E5E5', width:'30%', float:'left'}}><input type="checkbox" name="checkbox" id="checkbox" /></div>
        </p>
        <p>
          <div style={{ backgroundColor: '#F2F2F2', border: '1px solid #E5E5E5', width:'40%', clear:'left', float:'left'}}>通知书号</div>
          <div style={{ backgroundColor: '#F2F2F2', border: '1px solid #E5E5E5', width:'30%', float:'left'}}><input type="checkbox" name="checkbox" id="checkbox" /></div>
          <div style={{ backgroundColor: '#F2F2F2', border: '1px solid #E5E5E5', width:'30%', float:'left'}}><input type="checkbox" name="checkbox" id="checkbox" /></div>
        </p>
        <p>
          <div style={{ border: '1px solid #E5E5E5', width:'40%', clear:'left', float:'left'}}>身份证号</div>
          <div style={{ border: '1px solid #E5E5E5', width:'30%', float:'left'}}><input type="checkbox" name="checkbox" id="checkbox" /></div>
          <div style={{ border: '1px solid #E5E5E5', width:'30%', float:'left'}}><input type="checkbox" name="checkbox" id="checkbox" /></div>
        </p>
        <p>
          <div style={{ backgroundColor: '#F2F2F2', border: '1px solid #E5E5E5', width:'40%', clear:'left', float:'left'}}>录取专业</div>
          <div style={{ backgroundColor: '#F2F2F2', border: '1px solid #E5E5E5', width:'30%', float:'left'}}><input type="checkbox" name="checkbox" id="checkbox" /></div>
          <div style={{ backgroundColor: '#F2F2F2', border: '1px solid #E5E5E5', width:'30%', float:'left'}}><input type="checkbox" name="checkbox" id="checkbox" /></div>
        </p>
        <p>
          <div style={{ width:'100%', textAlign: 'right'}}>
            <Button style={{ marginTop: '5px', marginBottom: '5px' }}>确定</Button>
          </div>
        </p>
      </div>
    );

    return (
      <div className={css.ZTYXKQTopDiv}>
        <div>
          <p className={css.ZTYXKQButtonPLeft}>
            <Button type="dashed" style={{ backgroundColor: '#EEEEEE', marginLeft: 5, border: 0, borderRadius: 30 }} >总体</Button>&nbsp;
            <Button type="primary" style={{ borderRadius: 30 }} >表结构查询</Button>
          </p>
        </div>
        <div style={{ paddingTop: 45 }}>
          <div className={css.echartsHead}>
            <img src={ZTBCX_ICON} /><font>业务数据库 > 学工业务 > 表 XXX.XXXXXX 查询</font>
            <div style={{ float: 'right', paddingRight: 50 }}>
              <Popover content={content} placement="bottom" trigger="click">
                <Button>查询配置</Button>
              </Popover>
            </div>
          </div>
          <div className={css.echartsBody} style={{ height: 650, backgroundColor: '#FFFFFF' }}>
            <div style={{ paddingTop: 25, paddingBottom: 25, paddingLeft: '3%', textAlign: 'left' }} >
              字段名：<Input placeholder="Basic usage" style={{ width: '150px', marginRight: '10px' }} />
              字段值：<Input placeholder="Basic usage" style={{ width: '150px', marginRight: '10px' }} />
              <Button type="primary">查询</Button>
            </div>
            <div style={{ paddingLeft: '3%', paddingRight: '3%', textAlign: 'center' }} >
              <TableDataSearch />
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

export default connect(mapStateToProps)(BusinessDbTableDataSearch);
