import {
  REQUEST_DATA, RECEIVE_DATA
} from '../actions'



const commonTable = (state={data:[],columns:[],pagination:{pageSize:5,current:1,total:10},loading:false},action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {...state,loading:true}
    case RECEIVE_DATA:
      return {
        ...state,
        loading:false,
        data:action.data,
        columns:action.columns,
        pagination:action.pagination
      }
    default:
      return state
  }
  
}

export default commonTable;