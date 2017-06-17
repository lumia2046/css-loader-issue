import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { Layout, Menu, Breadcrumb, Icon ,Footer ,Button ,Input,Row, Col,Tree,Pagination  } from 'antd'
import Header from '../../components/common/Header/Header'
import Copyright from '../../components/common/Copyright/Copyright'


import getSize from '../../utils/getSize'

import AppManagerTab from '../../components/ServiceManager/appManager/AppManagerTab'
import DsManagerTab from '../../components/ServiceManager/dsManager/DsManagerTab'
import OutInterfaceManagerTab from '../../components/ServiceManager/outInterfaceManager/OutInterfaceManagerTab'
import OutInterfaceAuthTab from '../../components/ServiceManager/outInterfaceAuth/OutInterfaceAuthTab'
import InInterfaceConfigTab from '../../components/ServiceManager/inInterfaceConfig/InInterfaceConfigTab'
import DataCheckTab from '../../components/ServiceManager/dataCheck/DataCheckTab'
import DataViewTab from '../../components/ServiceManager/dataView/DataViewTab'
import InterfaceAnalyseTab from '../../components/ServiceManager/interfaceAnalyse/InterfaceAnalyseTab'
import InterfaceLogTab from '../../components/ServiceManager/interfaceLog/InterfaceLogTab'


import fwzx from './images/fwzx.png'
import styles from './ServiceManager.css'



class ServiceManager extends Component {
  constructor(){
    super()
    this.state= {
      flag:'appManager',
      current: 'appManager',
      openKeys: [],
      theme: 'dark',
      tab:[]
    }

  }

  onOpenChange = (openKeys) => {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  }

  getAncestorKeys = (key) => {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  }


  

  render(){
  const TreeNode = Tree.TreeNode;
  const SubMenu = Menu.SubMenu;
  const { Content, Sider } = Layout;
  const {dispatch,menuState} = this.props;
  


    return (
      <Layout style={{background:'#eeeeee'}}>
          <Header {...({dispatch,menuState})}/>
          <Layout className={styles.breadcrumb_div}>
            <Breadcrumb>
              <Icon type="home" className={styles.breadcrumb_div_icon}/>
              <span className={styles.breadcrumb_div_span}>当前位置：服务中心 > 应用管理</span>
            </Breadcrumb>
          </Layout>
          <Layout>
            <Sider width={225} style={{ background: '#404040' }}>

              <div className={styles.sub_menu_title}>
                <img src={fwzx}/>
                <div style={{ color: 'white',fontSize:'14px' }}>服务中心管理</div>
              </div>

              <Menu
                theme={this.state.theme}
                mode="inline"
                openKeys={this.state.openKeys}
                defaultSelectedKeys={[this.state.current]}
                onOpenChange={this.onOpenChange}
                style={{ height: getSize().contentH-365 }}
                onClick={(item)=>{
                  this.setState({flag:item.key})
                }}
              >


                <Menu.Item key="appManager" > 
                  <Icon type="mail"/>应用管理
                </Menu.Item>
                <Menu.Item key="dsManager" > 
                  <Icon type="mail" />数据源管理
                </Menu.Item>
                <Menu.Item key="outInterfaceManager" > 
                  <Icon type="mail" />接口管理
                </Menu.Item>
                <Menu.Item key="outInterfaceAuth" > 
                  <Icon type="mail" />接口授权
                </Menu.Item>

                <SubMenu key="inInterface" title={<span><Icon type="setting" /><span>输入接口</span></span>}>
                  <Menu.Item key="inInterfaceConfig">接口配置</Menu.Item>
                  <Menu.Item key="dataCheck">数据审核</Menu.Item>
                  <Menu.Item key="dataView">数据查看</Menu.Item>
                </SubMenu>

                <Menu.Item key="interfaceAnalyse" > 
                  <Icon type="mail"  />接口分析
                </Menu.Item>
                <Menu.Item key="interfaceLog" > 
                  <Icon type="mail" />接口日志
                </Menu.Item>
             
              </Menu>
            </Sider>
            <Layout style={{ padding: '20px 24px 24px' }}>
                <Content style={{ background: '#fff', padding: 0, margin: 0, minHeight: 280 }}>
                   {this.state.flag == 'appManager'&& <div><AppManagerTab/> </div>}
                   {this.state.flag == 'dsManager'&& <div><DsManagerTab/></div>}
                   {this.state.flag == 'outInterfaceManager' && <div ><OutInterfaceManagerTab/></div>}
                   {this.state.flag == 'outInterfaceAuth'&& <div><OutInterfaceAuthTab/></div>}
                   {this.state.flag == 'inInterfaceConfig'&& <div><InInterfaceConfigTab/></div>}
                   {this.state.flag == 'dataCheck'&& <div><DataCheckTab/></div>}
                   {this.state.flag == 'dataView'&& <div><DataViewTab/></div>}
                   {this.state.flag == 'interfaceAnalyse'&& <div><InterfaceAnalyseTab/></div>}
                   {this.state.flag == 'interfaceLog'&& <div><InterfaceLogTab/></div>}
              </Content>
              
            </Layout>
          </Layout>

          <Copyright/>


      </Layout>   
    )
  }
  
}


function mapStateToProps(state) {
  const {menuState,commonTable} = state
  return {menuState,commonTable}
}

export default connect(mapStateToProps)(ServiceManager)