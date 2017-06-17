import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
// import {fetchHomePageData} from '../../actions'
import { Row,Col,Timeline } from 'antd'
import ljhy from './images/checking.jpg'
import timeLine from './images/TimeLine.png'
import styles from './dbCheckIndex.css'
import prefix from '../../../utils/routePrefix'
import getSize from '../../../utils/getSize'

class DbCheckIndex extends Component {
  constructor(){
    super()
    this.state={
       flag: 'index'
    }
  }

  goChecking() {
    console.log('**************goChecking***********');
  }

  render(){
    // 已有未核验天数
    let haveNoCheckDate = '15'; 
    // 待核验系统个数
    let needCheckNum = '12';
    // 上次核验分数
    let lastCheckPoint = '98';
    return (
      <div  style={{background:'white',height:'100%'}}>
        <div style={{paddingTop: (getSize().contentH-262)/2-220 }}>
            <Row>
          <Col span={5} offset={3}>
            <div>
                <img src={timeLine}/>
            </div>
          </Col>
          <Col span={10}  offset={1}>
            <div className={styles.dbInfoShow}>
               <Link to='/dbCheck/selectCheckSystem' onClick={() => {}}>
                  <img src={ljhy}/>
               </Link>               
            </div>
            <div style={{paddingTop:'20px'}}>
              <Row gutter={10}>
                <Col span={10}>
                  <Row gutter={2}>
                    <Col span={8}>
                      <p className={styles.dbFontStyleLeft}>已有</p>
                    </Col>
                    <Col span={4}>
                      <p className={styles.haveNoCheckDate}>{haveNoCheckDate}</p>
                    </Col>
                    <Col span={12}>
                      <p className={styles.dbFontStyleLeft}>天未核验</p>
                    </Col>
                  </Row>
                </Col>
                <Col span={4}>
                  <div>
                    <div style={{border:"1px", solid: "#000", width:"1px"}}></div>
                  </div>
                </Col>
                <Col span={10}>
                   <Row gutter={2} >
                    <Col span={4}>
                      <p className={styles.dbFontStyleRight}>有</p>
                    </Col>
                    <Col span={4}>
                      <p className={styles.needCheckNum}>{needCheckNum}</p>
                    </Col>
                    <Col span={16}>
                      <p className={styles.dbFontStyleRight}>个系统待核验</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row gutter={10}>
                <Col span={10}>
                  <Row gutter={2} >
                    <Col span={16}>
                      <p className={styles.dbFontStyleLeft}>上次核验</p>
                    </Col>
                    <Col span={4}>
                      <p className={styles.lastCheckPoint}>{lastCheckPoint}</p>
                    </Col>
                    <Col span={4}>
                      <p className={styles.dbFontStyleLeft}>分</p>
                    </Col>
                  </Row>
                </Col>
                <Col span={4}>
                  <div></div>
                </Col>
                <Col span={10}>
                  <p className={styles.dbFontStyleRightLink}>查看上次核验报告</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        </div>
        
      </div>  
    )
  }
}

export default DbCheckIndex