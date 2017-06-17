import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// import {fetchHomePageData} from '../../actions'
import { Layout, Row, Col, Button, Card, Input } from 'antd'
import Header from '../../components/common/Header/Header'
import Copyright from '../../components/common/Copyright/Copyright'
import getSize from '../../utils/getSize'
import css from './CSS/BusinessDb.css';

// 页面
import BusinessDbIndex from './Page/BusinessDbIndex'
import BusinessDbFrame from './Page/BusinessDbFrame'
import BusinessDbTablePermission from './Page/BusinessDbTablePermission'

class TestFetch extends Component {
  constructor() {
    super()
    this.state = {};

  }

  // RequestMethod
  ButtonRequestMethod = (url, method) => {
    var opts = {
      method: method,
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*'
      }
    }

    fetch(url, opts)
      .then((response) => {
        // 网络请求成功执行该回调函数.得到响应对象.通过response可以获取请求数据
        // 例如: json  text  等等

        // return response.text();
        return response.json();
      })
      .then((responseData) => {
        // 处理请求得到的数据
       
        console.log(responseData.data);
        console.log(responseData.data.cjsj);
        alert(responseData);
      })
      .catch((error) => {
        // 网络请求失败返回执行该回调函数，得到错误信息
        alert(error);
      })
  }

  render() {
    const { Content, Footer, Sider } = Layout;
    const { dispatch, menuState, hashUrl } = this.props;
    const baseUrl = hashUrl.currentUrl.substr(0, hashUrl.currentUrl.lastIndexOf('/'))

    return (
      <div>
        <Button onClick={this.ButtonRequestMethod.bind(this, "/apis/code/category/list?page=2", "GET")}>GetMethod</Button>
        <Button onClick={this.ButtonRequestMethod.bind(this, "", "Post")}>PostMethod</Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { menuState, hashUrl } = state;
  return { menuState, hashUrl }
}

export default connect(mapStateToProps)(TestFetch)
