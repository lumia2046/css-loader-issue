import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// import {fetchHomePageData} from '../../actions'
import { Layout, Row, Col, Button } from 'antd'
import Header from '../../../components/common/Header/Header'
import css from '../CSS/BusinessDb.css';

import bgimage from '../Image/bgimage.png';
import cslogo from '../Image/cslogo.png';
import CWYWSJ_ICON from '../Image/CWYWSJ_ICON.png';
import JWYWSJ_ICON from '../Image/JWYWSJ_ICON.png';
import TSYWSJ_ICON from '../Image/TSYWSJ_ICON.png';
import XGYWSJ_ICON from '../Image/XGYWSJ_ICON.png'
import YSYWSJ_ICON from '../Image/YSYWSJ_ICON.png'
import ZTGS_ICON from '../Image/ZTGS_ICON.png'
import SAVE_ICON from '../Image/SAVE_ICON.png'
import EDIT_ICON from '../Image/EDIT_ICON.png'

import szkj from '../Image/szkj.png';
import szbl from '../Image/szbl.png';
import szyp from '../Image/szyp.png';
import xtgs from '../Image/xtgs.png'


import getSize from '../../../utils/getSize'
import CardModule from '../Common/CardModule'

class BusinessDbIndex extends Component {
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
      <div>
        {/* 第一行名片 */}
        <div id='mainContent' style={{ background: '#ECECEC' }}>
          <Row>
            <div className={css.antRow}>
              <Col>
                <div className={css.antCol8}>
                  <div className={css.antCard}>
                    <div className={css.antCardHead}>
                      <div className={css.antCardHeadTitleLeft}><img src={ZTGS_ICON} width="20px" height="20px" />
                        <font>总体概述</font>
                      </div>
                      <div className={css.antCardHeadTitleRight}></div>
                    </div>

                    <Link to={`/businessDb/TotalRunInfo`} onClick={() => { }}>
                      <div className={css.antCardBody} style={{ width: 465, height: 350 }}>
                        <div className={css.cont1}>
                          <div className={css.imgDiv}>
                            <img src={szkj} width="70px" height="70px" />
                          </div>
                          <div className={css.textDiv}>
                            <p>所占空间：</p>
                            <p>1GB</p>
                          </div>
                        </div>
                        <div className={css.cont2}>
                          <div className={css.imgDiv}>
                            <img src={szbl} width="70px" height="70px" />
                          </div>
                          <div className={css.textDiv}>
                            <p>所占比例：</p>
                            <p>50%</p>
                          </div>
                        </div>
                        <div className={css.cont3}>
                          <div className={css.imgDiv}>
                            <img src={xtgs} width="70px" height="70px" />
                          </div>
                          <div className={css.textDiv}>
                            <p>系统个数：</p>
                            <p>8个</p>
                          </div>
                        </div>
                        <div className={css.cont4}>
                          <div className={css.imgDiv}>
                            <img src={szyp} width="70px" height="70px" />
                          </div>
                          <div className={css.textDiv}>
                            <p>所占硬盘：</p>
                            <p>1GB</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col>
                <CardModule initObj={{
                  systemName: "人力业务数据",
                  icon: YSYWSJ_ICON,
                  cslogo: cslogo,
                  linkTo: "/businessDb/SystemIndex/1",
                  mobile: "13800138000",
                  IPAddr: "192.168.100.100",
                  CreateTime: "2017-06-06"
                }} />
              </Col>

              <Col>
                <CardModule initObj={{
                  systemName: "教务业务数据",
                  icon: JWYWSJ_ICON,
                  cslogo: cslogo,
                  linkTo: "/businessDb/SystemIndex/1",
                  mobile: "13800138111",
                  IPAddr: "192.168.100.100",
                  CreateTime: "2017-06-06"
                }} />
              </Col>

              <Col>
                <CardModule initObj={{
                  systemName: "图书业务数据",
                  icon: TSYWSJ_ICON,
                  cslogo: cslogo,
                  linkTo: "/businessDb/SystemIndex/1",
                  mobile: "13800138222",
                  IPAddr: "192.168.100.100",
                  CreateTime: "2017-06-06"
                }} />
              </Col>
            </div>
          </Row>
        </div>

        {/* 第二行名片 */}
        <div style={{ background: '#ECECEC' }} >
          <Row>
            <div className={css.antRow}>
              <Col>
                <CardModule initObj={{
                  systemName: "学工业务数据",
                  icon: XGYWSJ_ICON,
                  cslogo: cslogo,
                  linkTo: "/businessDb/SystemIndex/1",
                  mobile: "13800138333",
                  IPAddr: "192.168.100.100",
                  CreateTime: "2017-06-06"
                }} />
              </Col>

              <Col>
                <CardModule initObj={{
                  systemName: "财务业务数据",
                  icon: CWYWSJ_ICON,
                  cslogo: cslogo,
                  linkTo: "/businessDb/SystemIndex/1",
                  mobile: "13800138444",
                  IPAddr: "192.168.100.100",
                  CreateTime: "2017-06-06"
                }} />
              </Col>
            </div>
          </Row>
        </div>
      </div>
    )

  }
}

function mapStateToProps(state) {
  const { menuState, hashUrl } = state;
  return { menuState, hashUrl }
}

export default connect(mapStateToProps)(BusinessDbIndex)
