import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router,browserHistory,hashHistory } from 'react-router'
import TotalRoutes from './TotalRoutes';
import { AppContainer } from 'react-hot-loader';
import store from './configureStore'


var FastClick = require('fastclick');
import 'lodash'

//解决移动端300毫秒延迟
FastClick.attach(document.body);


const render = (Component) => {
    ReactDOM.render(
    	<AppContainer>
        	<Provider store={store}>
        	    <Component />
        	</Provider>
        </AppContainer>,
        document.getElementById('root')
    );
}

render(TotalRoutes)

if(module.hot) {
    module.hot.accept('./TotalRoutes', () => { render(TotalRoutes) });
}