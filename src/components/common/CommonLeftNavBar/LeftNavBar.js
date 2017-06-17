import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import {fetchHomePageData} from '../actions'
import { Layout, Row, Col, Card } from 'antd'
import Header from '../../../components/common/Header/Header'
import getSize from '../../../utils/getSize'
import nav from './Navigation.css';

import CWYWSJ_IMG from '../../../containers/BusinessDb/Image/CWYWSJ_IMG.png'
import JWYWSJ_IMG from '../../../containers/BusinessDb/Image/JWYWSJ_IMG.png'
import TSYWSJ_IMG from '../../../containers/BusinessDb/Image/TSYWSJ_IMG.png'
import XGYWSJ_IMG from '../../../containers/BusinessDb/Image/XGYWSJ_IMG.png'
import YSYWSJ_IMG from '../../../containers/BusinessDb/Image/YSYWSJ_IMG.png'
import ZTGS_IMG from '../../../containers/BusinessDb/Image/ZTGS_IMG.png'

class LeftNavBar extends Component {

  render() {
    var cardData = this.props.initObj;

    // let cardData = [
    //   { img: ZTGS_IMG, title: '总体描述', linkTo: "/businessDb/TotalRunInfo" },
    //   { img: YSYWSJ_IMG, title: '人事业务数据', linkTo: "/businessDb/SystemIndex/1" },
    //   { img: JWYWSJ_IMG, title: '教务业务数据', linkTo: "/businessDb/SystemIndex/2" },
    //   { img: TSYWSJ_IMG, title: '图书业务数据', linkTo: "/businessDb/SystemIndex/3" },
    //   { img: XGYWSJ_IMG, title: '学工业务数据', linkTo: "/businessDb/SystemIndex/4" },
    //   { img: CWYWSJ_IMG, title: '财务业务数据', linkTo: "/businessDb/SystemIndex/5" }
    // ]

    return (
      <div>
        {
          cardData.map((navItem, index) =>
            <div key={index}>
              <div className={nav.divCenter}>
                <Card>
                  <Link to={navItem.linkTo} onClick={() => { }}>
                    <div className={nav.customImage}>
                      <img alt="example" src={navItem.img} />
                    </div>
                    <div className={nav.customCard}>
                      <p>{navItem.title}</p>
                    </div>
                  </Link>
                </Card>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default LeftNavBar;
