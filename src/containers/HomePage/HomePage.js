import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchHomePageData } from '../../actions'
import { Layout, Menu, Breadcrumb, Icon, DatePicker, Button } from 'antd'
import Header from '../../components/common/Header/Header'
import CommonTable from '../../components/common/CommonTable/CommonTable'
import RecentInterfaceInvoke from '../../components/HomePage/RecentInterfaceInvoke/RecentInterfaceInvoke'
import moment from 'moment'
import styles from './styles.css'

import getSize from '../../utils/getSize'

class HomePage extends Component {
  constructor() {
    super()
  }


  render() {

    const { SubMenu } = Menu;
    const { Content, Footer, Sider } = Layout;
    const { MonthPicker, RangePicker } = DatePicker;


    const { commonTable, dispatch, menuState } = this.props;


    return (
      <Layout>
        <Header {...({ dispatch, menuState }) } />
        <Layout className={styles.breadcrumb_div}>
            <Breadcrumb>
              <Icon type="home" className={styles.breadcrumb_div_icon}/><span className={styles.breadcrumb_div_span}>当前位置：首页</span>
            </Breadcrumb>
        </Layout>
        <div style={{padding:'20px 40px'}}>
          <div style={{display:'inline-block',width:'70%'}}>
            <RecentInterfaceInvoke />
          </div>
          <div style={{display:'inline-block',width:'30%'}}>

          </div>
        </div>
      </Layout>
    )
  }

}




function mapStateToProps(state) {
  const { menuState, homePage, commonTable } = state
  // const tabData = state.homePage
  return { menuState, homePage, commonTable }
}

// 用connect方法连接HomePage组件，实际上是在HomePage组件上加上了Connect(HomePage)这个父组件，HomePage里有关Connect的state变化的props就是通过mapStateToProps设置的
// connect方法的第二个参数如果不传的话就会默认将store.dispatch默认作为了dispatch参数传进HomePage的props，所以HomePage的props里就有一个dispatch
export default connect(mapStateToProps)(HomePage)