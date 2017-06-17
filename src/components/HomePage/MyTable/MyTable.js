import React from 'react';
import {Link} from 'react-router'
import prefix from '../../../utils/routePrefix'
import {logout,fetchProfile} from '../../../actions'
import styles from './styles.css'
import getSize from '../../../utils/getSize'
import { Table } from 'antd'

export default class MyTable extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      pagination: {},
      loading: false,
    };
  }
  
  handleTableChange = (pagination) => {
    
    this.setState({
      pagination: pagination,
    });
    
    // this.fetch({
    //   results: pagination.pageSize,
    //   page: pagination.current,
    //   sortField: sorter.field,
    //   sortOrder: sorter.order,
    //   ...filters,
    // });
  }
  
  componentWillMount(){
    const {dispatch,fetchHomePageData} = this.props;
    dispatch(fetchHomePageData());
  }
  componentWillReceiveProps(newProps){
    let oldData = this.props.tabData;
    let newData = newProps.tabData;
    if(oldData.data != newData.data){
      this.setState(newData);
    }
    
  }
  render() {

    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      
    }, {
      title: 'Age',
      dataIndex: 'age',
    },{
      title: 'Phone',
      dataIndex: 'phone',
    }, {
      title: 'Address',
      dataIndex: 'address',

    }];
    return (
      <div>
          <Table columns={columns}
            dataSource={this.state.data}
            pagination={this.state.pagination}
            loading={this.state.loading}
            onChange={this.handleTableChange}
          />
          <div className={styles.test}></div> 
      </div>
      
    );
  }
}
