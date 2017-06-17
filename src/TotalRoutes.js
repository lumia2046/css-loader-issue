
import React from 'react'
import { connect } from 'react-redux'
import { Route, HashRouter as Router } from 'react-router-dom'
import createHistory from 'history/createHashHistory'

import {setHashUrl,changeMenuState} from './actions.js'
import './styles/index.css'
import prefix from './utils/routePrefix';

import App from './containers/App/App';
import HomePage from './containers/HomePage/HomePage';
import SystemPage from './containers/SystemPage/SystemPage';
import ServiceManager from './containers/ServiceManager/ServiceManager';
import DbCheck from './containers/DbCheck/DbCheck';
import DbMonitor from './containers/DbMonitor/DbMonitor';
import DataWarehouse from './containers/DataWarehouse/DataWarehouse';
import HistoryDb from './containers/HistoryDb/HistoryDb';
import BusinessDb from './containers/BusinessDb/BusinessDb';

const history = createHistory()

@connect ((state) => {
  const {menuState} = state
  return {menuState}
})
export default class TotalRoutes extends React.Component {
  componentWillMount() {
	  let dispatch = this.props.dispatch

	  let menu = window.location.href.split('#')[1].split('/')

	  if(menu[1]){
					let menuActive = 7;
					switch(menu[1]){
						case 'index':
						menuActive=7
						break;
						case 'businessDb':
						menuActive=6
						break;
						case 'historyDb':
						menuActive=5
						break;
						case 'dataWarehouse':
						menuActive=4
						break;
						case 'dbMonitor':
						menuActive=3
						break;
						case 'dbCheck':
						menuActive=2
						break;
						case 'serviceManager':
						menuActive=1
						break;
						case 'system':
						menuActive=0
						break;
						default:
						menuActive=7
					}
					dispatch(changeMenuState(menuActive))
					dispatch(setHashUrl({oldURL:'/',currentUrl:window.location.href.split('#')[1]}))
				}
        window
            .addEventListener('hashchange', function (ev) {
                let hashUrl = {oldURL:ev.oldURL.split('#')[1],currentUrl:ev.newURL.split('#')[1]}
				dispatch(setHashUrl(hashUrl))
				
            })
  }
  componentWillUnMount(){
	  window.removeEventListener('hashchange')
  }  
  render() {
      return (
          <Router history={history}>
          	<div>
          		<Route exact path="/" component={HomePage}/>
          		<Route path="/index/*" component={HomePage}/>
            	<Route path="/system/*" component={SystemPage}/>
            	<Route path='/serviceManager/*' component={ServiceManager}/>
            	<Route path='/dbCheck/*' component={DbCheck}/>
            	<Route path='/dbMonitor/*' component={DbMonitor}/>
            	<Route path='/dataWarehouse/*' component={DataWarehouse}/>
            	<Route path='/historyDb/*' component={HistoryDb}/>
            	<Route path='/businessDb/*' component={BusinessDb}/>
          	</div>
          </Router>
    );
  }
}
