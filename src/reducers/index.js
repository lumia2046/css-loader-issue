import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import homePage from './homePage'
import menuState from './menuState'
import commonTable from './commonTable'
import hashUrl from './hashUrl'
// import currentRouter from './currentRouter'
// import login from './login'
// import profile from './profile'
// import message from './message'
// import publishTopic from './publishTopic'
// import collectedTopics from './collectedTopics'

const rootReducer = combineReducers({
    routing: routerReducer,
    homePage,
    menuState,
    commonTable,
    hashUrl
})

export default rootReducer


