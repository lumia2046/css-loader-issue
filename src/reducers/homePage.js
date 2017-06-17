import {
  REQUEST_DATA, RECEIVE_DATA
} from '../actions'



const homePage = (state={data:[],pagination:{pageSize:10,current:1,total:200},loading:false},action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {...state,loading:true,pagination:{pageSize:action.pageSize,current:action.currentPage,total:action.total}}
    case RECEIVE_DATA:
      return {
        ...state,
        loading:false,
        data:action.data
      }
    default:
      return state
  }
  
}

export default homePage;

