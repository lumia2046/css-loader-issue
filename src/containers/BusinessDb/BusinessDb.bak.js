import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import {fetchHomePageData} from '../../actions'
import { Layout, Row, Col, Button } from 'antd'
import Header from '../../components/common/Header/Header'
import css from './BusinessDb.css';

import bgimage from './Image/bgimage.png';
import cslogo from './Image/cslogo.png';
import ywsjk from './Image/ywsjk.png';
import szyp from './Image/szyp.png'
import xtgs from './Image/xtgs.png'
import szbl from './Image/szbl.png'
import szkj from './Image/szkj.png'

import getSize from '../../utils/getSize'
import CardModule from './CardModule'

class BusinessDb extends Component {
  constructor() {
    super()
  }

  changeContent(t1, t2) {
    alert(t1);
    alert(t2);
  }

  render() {
    const { Content, Footer, Sider } = Layout;
    const { dispatch, menuState } = this.props;
    return (
      <Layout>
        <Header {...({ dispatch, menuState }) } />
        <div style={{ background: '#ECECEC' }}>
        {/** 第一行名片 **/}
          <Row gutter={16}>
            <Col span={6}>
              <div className={css.antRow}>
                <div className={css.antCol8}>
                  <div className={css.antCard}>
                    <div className={css.antCardHead}>
                      <div className={css.antCardHeadTitleLeft}><img src={ywsjk} width="20px" height="20px" />
                        <font>总体概述</font>
                      </div>
                      <div className={css.antCardHeadTitleRight}><a onClick={this.changeContent.bind(this, '111111', '2222222')}>查看更多&nbsp;>></a></div>
                    </div>
                    <div className={css.antCardBody} style={{ width: 460, height: 335 }}>
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
                  </div>
                </div>
              </div>
            </Col>

            <Col span={6}>
              <div className={css.antCol8}>
                <div className={css.antCard}>
                  <div className={css.antCardHead}>
                    <div className={css.antCardHeadTitleLeft}><img src={ywsjk} width="20px" height="20px" />
                      <font>人事业务数据</font>
                    </div>
                    <div className={css.antCardHeadTitleRight}>查看更多&nbsp;>></div>
                  </div>
                  <div className={css.antCardBody}>
                    <div className={css.antCardBodyDiv} style={{ backgroundImage: `url(${bgimage})` }}>
                      <div className={css.antCardBodyDivLeft}><img src={cslogo} width="120" height="120" /></div>
                      <div className={css.antCardBodyDivRight}>
                        <ul>
                          <ol><img src={ywsjk} width="15px" height="15px" />联系方式：13800138000</ol>
                          <ol><img src={ywsjk} width="15px" height="15px" />IP地址：192.168.100.100</ol>
                          <ol><img src={ywsjk} width="15px" height="15px" />创建时间：2017-06-06</ol>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col span={6}>
              <div className={css.antCol8}>
                <div className={css.antCard}>
                  <div className={css.antCardHead}>
                    <div className={css.antCardHeadTitleLeft}><img src={ywsjk} width="20px" height="20px" />
                      <font>教务业务数据</font>
                    </div>
                    <div className={css.antCardHeadTitleRight}>查看更多&nbsp;>></div>
                  </div>
                  <div className={css.antCardBody}>
                    <div className={css.antCardBodyDiv} style={{ backgroundImage: `url(${bgimage})` }}>
                      <div className={css.antCardBodyDivLeft}><img src={cslogo} width="120" height="120" /></div>
                      <div className={css.antCardBodyDivRight}>
                        <ul>
                          <ol><img src={ywsjk} width="15px" height="15px" />联系方式：13800138000</ol>
                          <ol><img src={ywsjk} width="15px" height="15px" />IP地址：192.168.100.100</ol>
                          <ol><img src={ywsjk} width="15px" height="15px" />创建时间：2017-06-06</ol>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col span={6}>
              <div className={css.antCol8}>
                <div className={css.antCard}>
                  <div className={css.antCardHead}>
                    <div className={css.antCardHeadTitleLeft}><img src={ywsjk} width="20px" height="20px" />
                      <font>图书业务数据</font>
                    </div>
                    <div className={css.antCardHeadTitleRight}>查看更多&nbsp;>></div>
                  </div>
                  <div className={css.antCardBody}>
                    <div className={css.antCardBodyDiv} style={{ backgroundImage: `url(${bgimage})` }}>
                      <div className={css.antCardBodyDivLeft}><img src={cslogo} width="120" height="120" /></div>
                      <div className={css.antCardBodyDivRight}>
                        <ul>
                          <ol><img src={ywsjk} width="15px" height="15px" />联系方式：13800138000</ol>
                          <ol><img src={ywsjk} width="15px" height="15px" />IP地址：192.168.100.100</ol>
                          <ol><img src={ywsjk} width="15px" height="15px" />创建时间：2017-06-06</ol>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/** 第二行名片 **/}
        <div className={css.antRow}>
          <Row gutter={16}>
            <Col span={6}>
              <div className={css.antCol8}>
                <div className={css.antCard}>
                  <div className={css.antCardHead}>
                    <div className={css.antCardHeadTitleLeft}><img src={ywsjk} width="20px" height="20px" />
                      <font>学工业务数据</font>
                    </div>
                    <div className={css.antCardHeadTitleRight}>查看更多&nbsp;>></div>
                  </div>
                  <div className={css.antCardBody}>
                    <div className={css.antCardBodyDiv} style={{ backgroundImage: `url(${bgimage})` }}>
                      <div className={css.antCardBodyDivLeft}><img src={cslogo} width="120" height="120" /></div>
                      <div className={css.antCardBodyDivRight}>
                        <ul>
                          <ol><img src={ywsjk} width="15px" height="15px" />联系方式：13800138000</ol>
                          <ol><img src={ywsjk} width="15px" height="15px" />IP地址：192.168.100.100</ol>
                          <ol><img src={ywsjk} width="15px" height="15px" />创建时间：2017-06-06</ol>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col span={6}>
              <div className={css.antCol8}>
                <div className={css.antCard}>
                  <div className={css.antCardHead}>
                    <div className={css.antCardHeadTitleLeft}><img src={ywsjk} width="20px" height="20px" />
                      <font>财务业务数据</font>
                    </div>
                    <div className={css.antCardHeadTitleRight}>查看更多&nbsp;>></div>
                  </div>
                  <div className={css.antCardBody}>
                    <div className={css.antCardBodyDiv} style={{ backgroundImage: `url(${bgimage})` }}>
                      <div className={css.antCardBodyDivLeft}><img src={cslogo} width="120" height="120" /></div>
                      <div className={css.antCardBodyDivRight}>
                        <ul>
                          <ol><img src={ywsjk} width="15px" height="15px" />联系方式：13800138000</ol>
                          <ol><img src={ywsjk} width="15px" height="15px" />IP地址：192.168.100.100</ol>
                          <ol><img src={ywsjk} width="15px" height="15px" />创建时间：2017-06-06</ol>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

      </Layout>
    )
  }
}

function mapStateToProps(state) {
  const menuState = state.menuState;
  return { menuState }
}

export default connect(mapStateToProps)(BusinessDb)
