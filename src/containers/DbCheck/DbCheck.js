import React, { Component } from 'react'
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import {fetchHomePageData} from '../../actions'
import { Layout,Menu,Icon,Breadcrumb } from 'antd'
import Header from '../../components/common/Header/Header'
import DbcheckMenu from './DbCheckMenu.json'
import sjkhy from './images/sjkhy_sub.png'
import styles from './DbCheck.css'
import Copyright from '../../components/common/Copyright/Copyright'
import CheckDetail from '../../components/DbCheck/CheckDetail/CheckDetail'
import CheckHistory from '../../components/DbCheck/CheckHistory/CheckHistory'
import DbCheckIndex from '../../components/DbCheck/dbCheckIndex/DbCheckIndex'
import DbChecking from '../../components/DbCheck/dbChecking/DbChecking'
import SelectCheckSystem from '../../components/DbCheck/dbChecking/SelectCheckSystem'
import DbCheckedResult from '../../components/DbCheck/dbChecking/DbCheckedResult'

import CheckAnalyse from '../../components/DbCheck/CheckAnalyse/CheckAnalyse'

import getSize from '../../utils/getSize'


class DbCheck extends Component {
  constructor(){
    super()
    this.state= {
      theme: 'dark'
    }
  }

  render(){
    const { Content, Footer, Sider } = Layout;
    const {dispatch,menuState,hashUrl} = this.props;
    const baseUrl = hashUrl.currentUrl.substr(0,hashUrl.currentUrl.lastIndexOf('/'))
    const menuTitle = '数据库核验';
    return (
      <Layout>
          <Header {...({dispatch,menuState})}/>
          <Layout className={styles.breadcrumb_div}>
            <Breadcrumb>
              <Icon type="home" className={styles.breadcrumb_div_icon}/><span className={styles.breadcrumb_div_span}>当前位置：数据库核验</span>
            </Breadcrumb>
          </Layout>
          <Layout>
            <Sider width={200} style={{ background: '#434343', height: '100%' }}>

              <Layout className={styles.sub_menu_title}>
                <img src={sjkhy}/>
                <div>{menuTitle}</div>
              </Layout>

              <Menu
                    theme={this.state.theme}
                    mode="inline"
                    defaultOpenKeys={['sub1']}
                    style={{ height: getSize().contentH-365 }}
                    onClick={(item)=>{
                        this.setState({flag:item.key})
                    }}
                  >
                  <Menu.Item>
                    <Link key={1} to={`/dbCheck/checkAnalyse`} onClick={() => {}}>
                        <Icon type="tool" />{DbcheckMenu.hyfx}
                    </Link>
                    
                    </Menu.Item>
                  <Menu.Item>
                    <Link key={2} to={`/dbCheck/detail`} onClick={() => {}}>
                        <Icon type="tool" />{DbcheckMenu.hymx}
                    </Link>
                    
                  </Menu.Item>
                  <Menu.Item>
                    <Link key={3} to={`/dbCheck/history`} onClick={() => {}}>
                        <Icon type="tool" />{DbcheckMenu.hyls}
                    </Link>
                    
                  </Menu.Item>
              </Menu>
            </Sider>

            <Content style={{backgroundColor:"#EEEEEE"}}>
              <div className={styles.content} style={{height:'100%',width:getSize().contentW-220}}>
                {hashUrl.currentUrl.indexOf('/dbCheck/checkAnalyse')>-1 && <CheckAnalyse />}
                {hashUrl.currentUrl.indexOf('/dbCheck/index')>-1 && <DbCheckIndex />}
                {hashUrl.currentUrl.indexOf('/dbCheck/dbChecking')>-1 && <DbChecking />}
                {hashUrl.currentUrl.indexOf('/dbCheck/selectCheckSystem')>-1 && <SelectCheckSystem />}
                {hashUrl.currentUrl.indexOf('/dbCheck/dbCheckedResult')>-1 && <DbCheckedResult />}
                {hashUrl.currentUrl.indexOf('/dbCheck/detail')>-1  && <CheckDetail />}
                {hashUrl.currentUrl.indexOf('/dbCheck/history')>-1  && <CheckHistory />}

              </div>
            </Content>
          </Layout>
          <Copyright/>
      </Layout>   
    )
  }
  
}

function mapStateToProps(state) {
  const {menuState,hashUrl} = state;
  return {menuState,hashUrl}
}

export default connect(mapStateToProps)(DbCheck)