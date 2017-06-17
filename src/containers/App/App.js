import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import getSize from '../../utils/getSize'


class App extends Component {

  componentWillReceiveProps(newProps){
    // console.log(newProps)
  }
  componentWillUnmount(){
    // console.log('componentWillUnmount')
  }

  render() {
      return (
          <div>{this.props.children}</div>
      )
  }
}

App.propTypes = {
  // currentTopicId: PropTypes.string.isRequired,
  // article: PropTypes.object.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  // dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const {login,profile} = state
  return {login,profile}
}


export default connect(mapStateToProps)(App)