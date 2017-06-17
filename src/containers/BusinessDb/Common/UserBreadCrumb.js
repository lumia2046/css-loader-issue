import { Tag } from 'antd';
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import css from '../CSS/BusinessDb.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class UserBreadCrumb extends React.Component {{
  constructor() {
    super()
  }

  render() {
    const BusinessDbBreadCrumb = sessionStorage.getItem('BusinessDbBreadCrumb');
    return (
      <div style={{ height: '40px', lineHeight: '40px', paddingLeft: '10px', backgroundColor: '#047CBC', color: '#FFFFFF' }}>
        <Breadcrumb separator=">">
          {BusinessDbBreadCrumb.map(BreadCrumbtag => (
            <Breadcrumb.Item><Link to={BreadCrumb.link} onClick={() => { }}>{BreadCrumb.content}</Link></Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
    );
  }
}

export default UserBreadCrumb;