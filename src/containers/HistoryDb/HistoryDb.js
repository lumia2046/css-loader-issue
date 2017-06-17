import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import {fetchHomePageData} from '../../actions'
import { Layout} from 'antd'
import Header from '../../components/common/Header/Header'

import getSize from '../../utils/getSize'

class HistoryDb extends Component {
  constructor(){
    super()
  }

  render(){
  const { Content, Footer, Sider } = Layout;
  const {dispatch,menuState} = this.props;
    return (
      <Layout>
          <Header {...({dispatch,menuState})}/>
          
      </Layout>   
    )
  }
  
}

function mapStateToProps(state) {
  const menuState = state.menuState;
  return {menuState}
}

export default connect(mapStateToProps)(HistoryDb)